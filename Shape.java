package geometry;

public abstract class Shape implements Resizeable, Colorable,Comparator{
    private String color = "green";
    private boolean filled = true;
    public Shape(){
    };
    public Shape(String color, boolean filled) {
        this.color = color;
        this.filled = filled;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public boolean isFilled() {
        return filled;
    }

    public void setFilled(boolean filled) {
        this.filled = filled;
    }
    public abstract double getArea();
    public abstract double getPrimeter();
    @Override
    public String toString() {
        return "A Shape with color of "
                + getColor()
                + " and "
                + (isFilled() ? "filled" : "not filled");
    }

    @Override
    public void resize(double percent) {
    }

    @Override
    public String howToColor() {
        return this.color;
    }

    @Override
    public int compare(Shape h) {
        if (getArea() > h.getArea())return 1;
        else if (getArea() < h.getArea()) return -1;
        else return 0;
    }
}
