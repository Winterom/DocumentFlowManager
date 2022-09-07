package exception;

public class ServiceNotResponseException extends RuntimeException{
    public ServiceNotResponseException(String message) {
        super(message);
    }
}
