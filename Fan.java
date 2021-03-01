package Fan;

public class Fan {
    final int SLOW = 1;
    final int MEDIUM = 2;
    final int FAST = 3;
    private boolean on = false;
    private int speed = 1;
    private double radius = 5;
    private String color = "blue";

    public Fan() {
    }

    public Fan(boolean on, int speed, double radius, String color) {
        this.on = on;
        this.speed = speed;
        this.radius = radius;
        this.color = color;
    }

    public int getSLOW() {
        return SLOW;
    }

    public int getMEDIUM() {
        return MEDIUM;
    }

    public int getFAST() {
        return FAST;
    }

    public boolean isOn() {
        return on;
    }

    public void setOn(boolean on) {
        this.on = on;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String toString() {
        String temp = "";
        if (this.on){
            temp =  "Fan is on" +
                    ", speed=" + speed +
                    ", radius=" + radius +
                    ", color=" + color;
        }else temp =  "Fan is off" +
                ", speed=" + speed +
                ", radius=" + radius +
                ", color=" + color;
        return temp;
    }
    public static void main(String[] args){
        Fan fan1 = new Fan(true,3,10,"yellow");
        Fan fan2 = new Fan();
        System.out.println(fan1.toString());
        System.out.println(fan2.toString());
    }
}
