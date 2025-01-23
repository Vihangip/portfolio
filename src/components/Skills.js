import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const Skills = () => {
  const matterBoxRef = useRef(null);

  useEffect(() => {
    // Module aliases
    const { Engine, Render, Runner, Bodies, Composite, MouseConstraint, Mouse, Events } = Matter;

    // Create an engine
    const engine = Engine.create();

    engine.world.gravity.y = 0.5;

    // Create a renderer
    const render = Render.create({
      element: matterBoxRef.current,
      engine: engine,
      options: {
        width: matterBoxRef.current.clientWidth,
        height: matterBoxRef.current.clientHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    function createRectangles() {
      const matterElems = document.querySelectorAll('.dm-matter-elem');
      return Array.from(matterElems).map((matterElem) => {
        var elemWidth = matterElem.offsetWidth;
        var elemHeight = matterElem.offsetHeight;
        var elemPosX = parseFloat(matterElem.getAttribute('data-x')) || matterElem.offsetLeft + elemWidth / 2;
        var elemPosY = parseFloat(matterElem.getAttribute('data-y')) || matterElem.offsetTop + elemHeight / 2;
    
        var elemBody = Bodies.rectangle(elemPosX, elemPosY, elemWidth, elemHeight, {
          density: 0.01,
          friction: 0.1,
          restitution: 0.5,
          render: {
            opacity: 0
          }
        });
    
        Composite.add(engine.world, elemBody);
        return elemBody;
      });
    }

    // Create bodies for elements
    let elemBodies = createRectangles();

    // Function to create static bodies for boundaries
    const createBoundaries = () => {
      const ground = Bodies.rectangle(matterBoxRef.current.clientWidth / 2, matterBoxRef.current.clientHeight, matterBoxRef.current.clientWidth, 1, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });

      const leftWall = Bodies.rectangle(0, matterBoxRef.current.clientHeight / 2, 1, matterBoxRef.current.clientHeight, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });

      const rightWall = Bodies.rectangle(matterBoxRef.current.clientWidth, matterBoxRef.current.clientHeight / 2, 1, matterBoxRef.current.clientHeight, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });

      const topWall = Bodies.rectangle(matterBoxRef.current.clientWidth / 2, 0, matterBoxRef.current.clientWidth, 1, {
        isStatic: true,
        render: {
          opacity: 0
        }
      });

      // Add all of the bodies to the world
      Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);
    };

    createBoundaries();

    // Create runner
    const runner = Runner.create();

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Update positions and rotations after every engine update
    Events.on(engine, 'afterUpdate', () => {
      elemBodies.forEach((elemBody, index) => {
        const angle = elemBody.angle;
        const position = elemBody.position;
        const matterElem = document.querySelectorAll('.dm-matter-elem')[index];

        matterElem.style.left = `${position.x - matterElem.offsetWidth / 2}px`;
        matterElem.style.top = `${position.y - matterElem.offsetHeight / 2}px`;
        matterElem.style.transform = `rotate(${angle}rad)`;
      });
    });

    // Function to handle resize event
    const handleResize = () => {
      // Clear the existing bodies
      Composite.clear(engine.world, false);

      // Recreate boundaries and bodies
      createBoundaries();
      elemBodies = createRectangles();

      // Update the renderer size
      render.options.width = matterBoxRef.current.clientWidth;
      render.options.height = matterBoxRef.current.clientHeight;

      // Update mouse constraint
      mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel);

      mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
      mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
      mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);

      mouseConstraint.mouse.element.addEventListener('touchstart', mouseConstraint.mouse.mousedown, { passive: true });
      mouseConstraint.mouse.element.addEventListener('touchmove', (e) => {
        if (mouseConstraint.body) {
          mouseConstraint.mouse.mousemove(e);
        }
      });
      mouseConstraint.mouse.element.addEventListener('touchend', (e) => {
        if (mouseConstraint.body) {
          mouseConstraint.mouse.mouseup(e);
        }
      });
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Allow scrolling when mouse is on matter container
    mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel);

    // Allow swiping on touch-screen when in touch with the matter container
    mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
    mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
    mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);

    mouseConstraint.mouse.element.addEventListener('touchstart', mouseConstraint.mouse.mousedown, { passive: true });
    mouseConstraint.mouse.element.addEventListener('touchmove', (e) => {
      if (mouseConstraint.body) {
        mouseConstraint.mouse.mousemove(e);
      }
    });
    mouseConstraint.mouse.element.addEventListener('touchend', (e) => {
      if (mouseConstraint.body) {
        mouseConstraint.mouse.mouseup(e);
      }
    });

    // Flag to check if the engine has started
    let engineStarted = false;

    // Intersection Observer to start the engine only once
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !engineStarted) {
          // Element is in viewport and engine has not started yet
          engineStarted = true;
          Runner.run(runner, engine);
          Render.run(render);
        }
      });
    }, {
      threshold: 0.1 // Adjust the threshold as needed
    });

    // Start observing the matterBox
    observer.observe(matterBoxRef.current);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className='tech-stack'>
      <div className='stack-title'>
        <p> Here's my tech stack — literally! <br></br>
            Explore, experiment or play some jenga :)
        </p>
      </div>
      <div className="matter-box" ref={matterBoxRef}>
        <div className="dm-matter-elem" data-x="100" data-y="50">C</div>
        <div className="dm-matter-elem" data-x="100" data-y="60">C++</div>
        <div className="dm-matter-elem" data-x="100" data-y="70">Java</div>
        <div className="dm-matter-elem" data-x="100" data-y="80">SQL</div>
        <div className="dm-matter-elem" data-x="100" data-y="90">HTML</div>
        <div className="dm-matter-elem" data-x="100" data-y="100">CSS</div>
        <div className="dm-matter-elem" data-x="100" data-y="110">Python</div>
        <div className="dm-matter-elem" data-x="100" data-y="120">Javascript</div>
        <div className="dm-matter-elem" data-x="100" data-y="130">Typescript</div>

        <div className="dm-matter-elem" data-x="300" data-y="50">MySQL</div>
        <div className="dm-matter-elem" data-x="300" data-y="60">MongoDB</div>
        <div className="dm-matter-elem" data-x="300" data-y="70">MS SQL Server</div>

        <div className="dm-matter-elem" data-x="500" data-y="50">React</div>
        <div className="dm-matter-elem" data-x="500" data-y="60">Tailwind</div>
        <div className="dm-matter-elem" data-x="500" data-y="70">Leaflet</div>
        <div className="dm-matter-elem" data-x="500" data-y="80">Figma</div>
        <div className="dm-matter-elem" data-x="500" data-y="90">Recharts</div>
        <div className="dm-matter-elem" data-x="500" data-y="100">Three js</div>
        <div className="dm-matter-elem" data-x="500" data-y="110">Matter js</div>
        <div className="dm-matter-elem" data-x="500" data-y="120">Material UI</div>
        <div className="dm-matter-elem" data-x="500" data-y="130">Storybook</div>
        <div className="dm-matter-elem" data-x="500" data-y="140">React Three Fiber</div>

        <div className="dm-matter-elem" data-x="700" data-y="50">Node</div>
        <div className="dm-matter-elem" data-x="700" data-y="60">Express</div>
        <div className="dm-matter-elem" data-x="700" data-y="70">Flask</div>
        <div className="dm-matter-elem" data-x="700" data-y="80">Axios</div>
        <div className="dm-matter-elem" data-x="700" data-y="90">Postman</div>
        <div className="dm-matter-elem" data-x="700" data-y="100">Chai js</div>
        <div className="dm-matter-elem" data-x="700" data-y="110">WebSocket</div>

        <div className="dm-matter-elem" data-x="900" data-y="50">Git</div>
        <div className="dm-matter-elem" data-x="900" data-y="60">Linux</div>
        <div className="dm-matter-elem" data-x="900" data-y="70">YAML</div>
        <div className="dm-matter-elem" data-x="900" data-y="80">Docker</div>
        <div className="dm-matter-elem" data-x="900" data-y="90">Azure DevOps</div>
        <div className="dm-matter-elem" data-x="900" data-y="100">Azure Service Bus</div>
      </div>  
    </div>
    
  );
};

export default Skills;