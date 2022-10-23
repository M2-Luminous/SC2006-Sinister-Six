
/**
 * Class representing a Flat
 */
export default class Flat {
    private flatID: number;
    private block: string;
    private flatModel: string;
    private flatType: string;
    private floorAreaSqm: number;
    private leaseCommenceDate: number;
    private month: Date;
    private resalePrice: number;
    private storeyRange: string;
    private streetName: string;
    private town: string;

    /**
     * Constructor for creating a Flat object
     * @param flatID 
     * @param block 
     * @param flatModel 
     * @param flatType 
     * @param floorAreaSqm 
     * @param leaseCommenceDate 
     * @param month 
     * @param resalePrice 
     * @param storeyRange 
     * @param streetName 
     * @param town 
     */
    constructor(
        flatID: number,
        block: string,
        flatModel: string,
        flatType: string,
        floorAreaSqm: number,
        leaseCommenceDate: number,
        month: Date,
        resalePrice: number,
        storeyRange: string,
        streetName: string,
        town: string) {
        this.flatID = flatID;
        this.block = block;
        this.flatModel = flatModel;
        this.flatType = flatType;
        this.floorAreaSqm = floorAreaSqm;
        this.leaseCommenceDate = leaseCommenceDate;
        this.month = month;
        this.resalePrice = resalePrice;
        this.storeyRange = storeyRange;
        this.streetName = streetName;
        this.town = town;
    }

    // Getter and Setter functions to prevent users from editing attributes directly!

    /**
     * Getter function for returning Flat ID
     * @returns a string representation of the Flat ID
     */
    public getFlatID() {
        return this.flatID;
    }

    /**
     * Getter function for returning Flat Block
     * @returns a string representation of the Flat Block
     */
    public getBlock() {
        return this.block;
    }

    /**
     * Getter function for returning the Flat Model
     * @returns a string representation of the Flat Model
     */
    public getFlatModel() {
        return this.flatModel;
    }

    /**
     * Getter function for returning the Flat Type
     * @returns a string representation of the Flat Type
     */
    public getFlatType() {
        return this.flatType;
    }

    /**
     * Getter function for returning the Floor Area in Square Meters
     * @returns a number representation of the Floor Area in Square Meters 
     */
    public getFloorAreaSqm() {
        return this.floorAreaSqm;
    }

    /**
     * Getter function for returning the Flat's Lease Commence Date
     * @returns a number representation of the Flat's Lease Commence Date
     */
    public getLeaseCommenceDate() {
        return this.leaseCommenceDate;
    }

    /**
     * Getter function for returning the Flat's Storey Range
     * @returns a string representation of the Flat's Storey Range
     */
    public getStoreyRange() {
        return this.storeyRange;
    }

    /**
     * Getter function for returning the Flat's Street Name
     * @returns a string representation of the Flat's Street Name
     */
    public getStreetName() {
        return this.streetName;
    }

    /**
     * Getter function for returning the Flat's Town
     * @returns a string representation of the Flat's Town
     */
    public getTown() {
        return this.town;
    }

    /**
     * Getter function for returning the Flat's Resale Price
     * @returns a number representation of the Flat's Resale Price
     */
    public getPrice() {
        return this.resalePrice;
    }




    /**
     * Setter function for setting the Flat's ID
     * @param val
     */
    public setFlatID(val: number) {
        this.flatID = val;
    }

    /**
     * Setter function for setting the Flat's Block
     * @param val 
     */
    public setBlock(val: string) {
        this.block = val;
    }

    /**
     * Setter function for setting the Flat Model
     * @param val
     */
    public setFlatModel(val: string) {
        this.flatModel = val;
    }


    /**
     * Setter function for setting the Flat Type
     * @param val 
     */
    public setFlatType(val: string) {
        this.flatType = val;
    }

    /**
     * Setter function for setting the Floor Area in Square Meters
     * @param val 
     */
    public setFloorAreaSqm(val: number) {
        this.floorAreaSqm = val;
    }

    /**
     * Setter function for setting the Flat's Lease Commence Date
     * @param val 
     */
    public setLeaseCommenceDate(val: number) {
        this.leaseCommenceDate = val;
    }

    /**
     * Setter function for setting the Flat's Storey Range
     * @param val 
     */
    public setStoreyRange(val: string) {
        this.storeyRange = val;
    }

    /**
     * Setter function for setting the Flat's Street Name
     * @param val 
     */
    public setStreetName(val: string) {
        this.streetName = val;
    }


    /**
     * Setter function for setting the Flat's Town 
     * @param val 
     */
    public setTown(val: string) {
        this.town = val;
    }

    /**
     * Setter function for setting the Flat's Resale Price
     * @param val 
     */
    public setPrice(val: number) {
        this.resalePrice = val;
    }

}