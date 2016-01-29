module objects {

    export class Scene extends createjs.Container {
        
        constructor() {
            super();
            this.start();
        }

        // Add game objects to my scene in this method
        public start(): void {
            stage.addChild(this);
        }
        
        // update game objects ib my scene
        public update(): void {

        }

    }

}