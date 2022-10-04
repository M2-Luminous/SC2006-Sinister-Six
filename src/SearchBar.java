import java.util.*;

public class SearchBar {
    /*private int price = -1;
    private int area = -1;
    private int floor = -1;
    private int town = -1;
    private int model = -1;
    private long leaseStartDate = 0;

    public final int MIN_PRICE = 5000;
    public final int MAX_PRICE = 1418000;
    public final int MIN_FLOOR = 1;
    public final int MAX_FLOOR = 51;*/

    public SearchBar() {

    }

    public void enterFilter(int price, int area, int floor, String town, String model, long leaseStartDate)
    {
        Filter searchFilter = new Filter(price, area, floor, town, model, leaseStartDate);
    }

    public static void displayFilter() {
        // run loop through json data to display all the name [x-1]
        // display with MIN_PRICE MAX_PRICE MIN_FLOOR MAX_FLOOR
    }
    
    public int[] submit() {
        
    }
}