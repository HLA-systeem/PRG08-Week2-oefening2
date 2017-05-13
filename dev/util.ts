class Util{
    public static calculateCollision(ob1,ob2) { 
        if(!!ob1.getX && !!ob2.getWidth){
            if (ob1.getX() < ob2.getX() + ob2.getWidth() && 
                ob1.getX() + ob1.getWidth() > ob2.getX() &&
                ob1.getY() < ob2.getY() + ob2.getHeight() &&
                ob1.getHeight() + ob1.getY() > ob2.getY()) {
                    ob1.setSpeed(0);
                    Game.instance.endGame(0);
            }
        } 
    }
}