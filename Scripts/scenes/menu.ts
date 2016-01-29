// MENU STATE
module scenes {

    export class Menu extends objects.Scene {
        
        // private instance variables
        private _helloLabel:createjs.Text;
        private _startButton:objects.Button;
        
        constructor() {
            super();
        }

        public start(): void {
            console.log("Game Started...");

            this._helloLabel = new createjs.Text("Hello World!", "60px Consolas", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = config.Screen.CENTER_Y;

            this.addChild(this._helloLabel);
            
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 50 );
                
            this.addChild(this._startButton);
            
            this._startButton.on("click", this._startButtonClick, this);

            stage.addChild(this);

        }
        
        public update():void {
            this._helloLabel.rotation += 5;
        }
        
        // EVENT HANDLES +++++++++
        private _startButtonClick(event:createjs.MouseEvent){
            this._helloLabel.text = "Game Started";
        }
        
        
        
    }


}