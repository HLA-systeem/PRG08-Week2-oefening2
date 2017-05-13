class Util{
    public static calculateCollision(ob1,ob2) { 
        if(!!ob1.getX && !!ob2.getWidth){
            if (ob1.getX() < ob2.getX() + ob2.getWidth() && 
                ob1.getX() + ob1.getWidth() > ob2.getX()) {
                    console.log('coll');
            }
        } 
    }
}