package threading.creation;

public class ImplementingRunnableMain {

    public static void main(String[] args) {
        ImplementingRunnable implementingRunnable = new ImplementingRunnable();
        Thread thread = new Thread(implementingRunnable);
        thread.start();
        System.out.println("this is running on a main thread");
    }

}
