package threading.creation;

public class ExtendingThreadMain {

    public static void main(String[] args) {

        ExtendingThread extendingThread = new ExtendingThread();
        extendingThread.start();
        System.out.println("This is running in a main thread");
    }

}
