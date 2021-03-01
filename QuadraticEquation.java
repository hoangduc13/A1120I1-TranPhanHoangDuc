package QuadraticEquation;

public class QuadraticEquation {
    private double a;
    private double b;
    private double c;

    public QuadraticEquation() {
    }

    public QuadraticEquation(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public double getA() {
        return a;
    }

    public void setA(double a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public double getC() {
        return c;
    }

    public void setC(double c) {
        this.c = c;
    }
    public double getDiscriminant(){
        return this.b*this.b - 4*this.a*this.c;
    }
    public double getRoot1(double delta){
        if (delta<0) return 0;
        else{
            return (float) ((-this.b + Math.sqrt(delta)) / (2*this.a));
        }
    }
    public double getRoot2(double delta){
        if (delta<0) return 0;
        else{
            return (float) ((-this.b - Math.sqrt(delta)) / (2*this.a));
        }
    }
    public static void main(String[] args){
        QuadraticEquation pt_1 = new QuadraticEquation(1 , 3, 1);
        if(pt_1.getDiscriminant()<0) System.out.println("The equation has no roots");
        else{
            if (pt_1.getDiscriminant()==0) System.out.println("The equation has one root "+ pt_1.getRoot1(pt_1.getDiscriminant()));
            else{
                System.out.println("The equation has tow roots "+ pt_1.getRoot1(pt_1.getDiscriminant())+ " and "+pt_1.getRoot2(pt_1.getDiscriminant()));
            }
        }
    }
}
