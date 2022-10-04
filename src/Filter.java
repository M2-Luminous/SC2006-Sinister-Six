import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.*;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import java.io.IOException; 


public class Filter {
    private int price = -1;
    private int area = -1;
    private int floor = -1;
    private int town = -1;
    private int model = -1;
    private long leaseStartDate = 0;
    public final int MIN_PRICE = 5000;
    public final int MAX_PRICE = 1418000;
    public final int MIN_FLOOR = 1;
    public final int MAX_FLOOR = 51;
    private JSONObject townData = new JSONObject();
    private JSONObject flatTypeData = new JSONObject();
    
    public Filter() {
        readJson();
    }

    public Filter(int price, int area, int floor, String town, String model, long leaseStartDate){
        readJson();
        this.price = price;
        this.area = area;
        this.floor = floor;
        this.town = convertName(1, town);
        this.model = convertName(2, model);
        this.leaseStartDate = leaseStartDate;
    }

    private void readJson()
    {
        FileReader dataFile;
        try {
            dataFile = new FileReader("resources/data/conversion.json");
            JSONParser jsonParser = new JSONParser();
            JSONObject ds;
            try {
                ds = (JSONObject) jsonParser.parse(dataFile);
                JSONArray tArray = new JSONArray();
                tArray = (JSONArray) (ds.get("town"));
                this.townData = (JSONObject) tArray.get(0);
                tArray.clear();
                tArray = (JSONArray) (ds.get("flatType"));
                this.flatTypeData = (JSONObject) tArray.get(0);
            } catch (IOException | ParseException e) {
                //e.printStackTrace();
                System.out.println("Parse Error");
            }
        } catch (FileNotFoundException e) {
            //e.printStackTrace();
            System.out.println("File not found");
        }
    }

    public void testFilter()
    {
        System.out.println("Town number: " + this.town);
        System.out.println("Price: " + this.price);
        System.out.println("Area: " + this.area);
        System.out.println("Floor: " + this.floor);
        System.out.println("Model: " + this.model);
        System.out.println("Lease Start Date: " + this.leaseStartDate);
    }

    private int convertName(int c, String data) {
        switch (c) {
            case 1:
                return Integer.parseInt(this.townData.get(data).toString());
            case 2:
                return Integer.parseInt(this.flatTypeData.get(data).toString());
            default:
                return -1;
        }
    }

    public int[] applyFilter() {
        int[] finalFilter = { price, area, floor, town, model, model, (int) leaseStartDate };
        return finalFilter;
    }
}
