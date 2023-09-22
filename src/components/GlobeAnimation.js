import React, { useEffect, useRef } from 'react';

const GlobeAnimation = () => {
  const canvasRef = useRef(null);
  let cw, ch, c;
  let globeArray = [];
  let mouse = { x: '', y: '' };

  useEffect(() => {
    const canvas = canvasRef.current;
    c = canvas.getContext('2d');
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    // Globe object
    function Globe(ox, oy, r, dx, dy, angle, dtheta, particlesArr) {
      this.ox = ox;
      this.oy = oy;
      this.r = r;
      this.dx = dx;
      this.dy = dy;
      this.angle = angle;
      this.dtheta = dtheta;
      this.particlesArr = particlesArr;
      this.generate = () => {
        c.beginPath();
        if (this.ox + this.r > cw || this.ox - this.r < 0) {
          this.dx = -this.dx;
        }
        if (this.oy + this.r > ch || this.oy - this.r < 0) {
          this.dy = -this.dy;
        }
        c.arc(this.ox, this.oy, this.r, 0, Math.PI * 2);
        c.strokeStyle = '#a17ac2';
        c.shadowColor = '#a17ac2';
        c.shadowBlur = 8;
        c.stroke();
        c.shadowColor = 'transparent';
        if (Math.floor(this.angle) === 120 || Math.floor(this.angle) === 60) {
          this.dtheta = -this.dtheta;
        }
        this.angle += this.dtheta;
        const px1 = this.ox + r * Math.cos((this.angle * Math.PI) / 180);
        const py1 = this.oy + r * Math.sin((this.angle * Math.PI) / 180);
        const px2 = this.ox + r * Math.cos((this.angle * Math.PI) / 180 + Math.PI);
        const py2 = this.oy + r * Math.sin((this.angle * Math.PI) / 180 + Math.PI);
        const linGrd1 = c.createLinearGradient(px2, py2, px1, py1);
        const grdClr1 = '#8F304C';
        linGrd1.addColorStop(0.2, 'transparent');
        linGrd1.addColorStop(0.6, `${grdClr1}05`);
        linGrd1.addColorStop(0.7, `${grdClr1}10`);
        linGrd1.addColorStop(0.8, `${grdClr1}15`);
        linGrd1.addColorStop(0.9, `${grdClr1}45`);
        linGrd1.addColorStop(1, `${grdClr1}75`);
        c.beginPath();
        c.arc(this.ox, this.oy, this.r, 0, Math.PI * 2);
        c.fillStyle = linGrd1;
        c.fill();
        const linGrd2 = c.createLinearGradient(px1, py1, px2, py2);
        const grdClr2 = '#A56C59';
        linGrd2.addColorStop(0.2, 'transparent');
        linGrd2.addColorStop(0.6, `${grdClr2}05`);
        linGrd2.addColorStop(0.7, `${grdClr2}10`);
        linGrd2.addColorStop(0.8, `${grdClr2}15`);
        linGrd2.addColorStop(0.9, `${grdClr2}45`);
        linGrd2.addColorStop(1, `${grdClr2}75`);
        c.beginPath();
        c.arc(this.ox, this.oy, this.r, 0, Math.PI * 2);
        c.fillStyle = linGrd2;
        c.fill();
        const particleClr = ['#E49C82', '#FEDFA3', '#000', 'transparent'];
        for (let i = 0; i < this.particlesArr.length; i++) {
          c.beginPath();
          c.fillStyle = particleClr[getRandomInt(0, particleClr.length - 1)];
          let particleSize = 1.5;
          cw < 480 ? (particleSize = 1) : (particleSize = 1.5);
          if (
            Math.pow(this.particlesArr[i][0] - this.ox, 2) +
              Math.pow(this.particlesArr[i][1] - this.oy, 2) >=
            Math.pow(this.r - particleSize, 2)
          ) {
            if (
              Math.pow(mouse.x - this.ox, 2) + Math.pow(mouse.y - this.oy, 2) >
                Math.pow(this.r, 2) &&
              this.particlesArr[i][5] !== 'released'
            ) {
              this.particlesArr[i][2] = -this.particlesArr[i][2];
              this.particlesArr[i][3] = -this.particlesArr[i][3];
            } else {
              this.particlesArr[i][5] = 'released';
              this.particlesArr[i][0] += 2 * this.particlesArr[i][2];
              this.particlesArr[i][1] += 2 * this.particlesArr[i][3];
            }
          }
          this.particlesArr[i][0] += this.particlesArr[i][2] + this.dx;
          this.particlesArr[i][1] += this.particlesArr[i][3] + this.dy;
          c.fillRect(
            this.particlesArr[i][0],
            this.particlesArr[i][1],
            particleSize,
            particleSize
          );
        }
        this.ox += this.dx;
        this.oy += this.dy;
      };
    }

    function init() {
      globeArray = [];
      let R;
      cw < 480 ? (R = 70) : (R = 120);
      for (let i = 0; i < 8; i++) {
        let r = getRandomInt(R - 40, R);
        let ox = getRandomInt(0 + R, cw - R);
        let oy = getRandomInt(0 + R, ch - R);
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        let angle = getRandomInt(60, 120);
        let dtheta = 0.1;
        let particlesArr = [];
        for (let i = 0; i < 5 * r; i++) {
          let rx = getRandomInt(ox - r, ox + r);
          let ry = getRandomInt(oy - r, oy + r);
          let dx = Math.random() - 0.5;
          let dy = Math.random() - 0.5;
          particlesArr.push([rx, ry, dx, dy, '']);
          if (Math.pow(rx - ox, 2) + Math.pow(ry - oy, 2) >= Math.pow(r, 2)) {
            particlesArr.pop();
          }
        }
        globeArray.push(new Globe(ox, oy, r, dx, dy, angle, dtheta, particlesArr));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, cw, ch);
      for (let i = 0; i < globeArray.length; i++) {
        globeArray[i].generate(i);
      }
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="custom-canvas" />;
};

export default GlobeAnimation;

