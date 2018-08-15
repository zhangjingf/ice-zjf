import React, { Component } from 'react';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const canvas = this.canvas;
    canvas.height = 300;
    canvas.width = 300;
    this.canvas = canvas;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    this.xoffset = 0; // 初始偏移
    this.speed = 0.1; // 偏移速度
    // 水位数值
    this.rangeValue = 0.6;
    // 初始水位
    this.nowRange = 0;
    requestAnimationFrame(this.draw.bind(this, canvas));
    this.drawSin(ctx);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.state.dh);
  }
  draw() {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 曲线绘制
    if (!this.isDrawCircle) {
      this.drawCircle(ctx);
    }
    this.drawSin(ctx, this.xoffset, this.nowRange);
    this.xoffset += this.speed;
    if (this.nowRange < this.rangeValue) {
      this.nowRange += 0.01;
    }
    const animate = requestAnimationFrame(this.draw.bind(this));
    this.setState({
      dh: animate,
    });
  }
  drawSin(ctx, xoffset = 0, nowRange = 0) {
    const points = [];
    const canvasWidth = this.canvasWidth;
    const canvasHeight = this.canvasHeight;
    const startX = 0;
    const waveWidth = 0.05; // 波浪宽度,数越小越宽
    const waveHeight = 20; // 波浪高度,数越大越高
    ctx.beginPath();
    for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
      const y = waveHeight * Math.sin(((startX + x) * waveWidth) + xoffset);
      points.push([x, ((1 - nowRange) * canvasHeight) + y]);
      ctx.lineTo(x, ((1 - nowRange) * canvasHeight) + y);
    }
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(startX, canvasHeight);
    ctx.lineTo(points[0][0], points[0][1]);
    ctx.stroke();
  }
  drawCircle(ctx) {
    const r = this.canvasWidth / 2;
    const lineWidth = 5;
    const cR = r - (lineWidth);
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(r, r, cR, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.clip();
    this.isDrawCircle = true;
  }
  render() {
    return (
      <div className="home-page">
        <canvas ref={(c) => { this.canvas = c; }} />
      </div>
    );
  }
}
