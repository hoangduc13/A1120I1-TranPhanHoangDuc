package Animal;

public class Chicken extends Animal implements Edible {
    @Override
    public String makeSound() {
        return "cluck-cluck";
    }

    @Override
    public String howtoEat() {
        return "could be fried";
    }
}
