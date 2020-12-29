class Canvas extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.setDim = this.setDim.bind(this);
        this.initialize = this.initialize.bind(this);
        this.onMove = this.onMove.bind(this);
        this.rows = 10
        this.padding = 20
        this.linelength = 5;
        this.height = 500
        this.width = 500
    }
    setDim(c){
        console.log("loading");

        console.log(this.width,this.height);
    }
    initialize(ctx){
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.width, this.height);
         
        let xWidth = Math.floor((this.width - (this.padding*2)-this.linelength*2)/this.rows)
        let yWidth = Math.floor((this.height - (this.padding*2)-this.linelength*2)/this.rows)
        //draw tick marks
        console.log(xWidth, yWidth);
        ctx.lineWidth = .3;
        for(let i = 0; i < this.rows+1; i++){
            let x1 = this.padding
            let x2 = this.padding +xWidth*10 +this.linelength
            let y1 = this.padding + yWidth*10 + this.linelength
            let y2 = this.padding + this.linelength
            let x = this.padding + xWidth*i + this.linelength
            let y = this.padding + yWidth*i + this.linelength
            
            //tick marks
            ctx.moveTo(x, y1);
            ctx.lineTo(x, y1+this.linelength);
            ctx.moveTo(x1, y);
            ctx.lineTo(x1+this.linelength, y);
            //lines
            ctx.moveTo(x,y1);
            ctx.lineTo(x,y2);
            ctx.moveTo(x1,y);
            ctx.lineTo(x2,y);
            ctx.stroke();
            //numbers
            ctx.strokeText(`${this.rows-i}`,x1-10,y+this.linelength);
            ctx.strokeText(`${i}`,x-5,y1+this.linelength+10);
            
        }

    }
    componentDidMount() {
        const canvas = this.myRef.current
        console.log(canvas.offsetTop);
        const ctx = canvas.getContext("2d")
        this.setDim(canvas);
        this.initialize(ctx);
    }
    onMove(evt){
        let x = evt.clientX-this.myRef.current.offsetLeft+1;
        let y = (evt.clientY-this.myRef.current.offsetTop);
        console.log(x,y)
    }
    render() {
      return(
        <div>
          <canvas onLoad = {this.setDim} className = "container" onMouseMove={this.onMove}ref={this.myRef} width={640} height={425} />
            <style jsx>{`
            .container{
                width:100%;
                border:1pt black solid;
            }
            `}</style>
        </div>
      )
    }
  }
  export default Canvas