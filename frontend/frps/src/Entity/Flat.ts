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

    public getFlatID() {
        return this.flatID;
    }

    public getBlock() {
        return this.block;
    }

    public getFlatModel() {
        return this.flatModel;
    }

    public getFlatType() {
        return this.flatType;
    }

    public getFloorAreaSqm() {
        return this.floorAreaSqm;
    }

    public getLeaseCommenceDate() {
        return this.leaseCommenceDate;
    }

    public getStoreyRange() {
        return this.storeyRange;
    }

    public getStreetName() {
        return this.streetName;
    }

    public getTown() {
        return this.town;
    }

    public getPrice() {
        return this.resalePrice;
    }





    public setFlatID(val: number) {
        this.flatID = val;
    }

    public setBlock(val: string) {
        this.block = val;
    }

    public setFlatModel(val: string) {
        this.flatModel = val;
    }

    public setFlatType(val: string) {
        this.flatType = val;
    }

    public setFloorAreaSqm(val: number) {
        this.floorAreaSqm = val;
    }

    public setLeaseCommenceDate(val: number) {
        this.leaseCommenceDate = val;
    }

    public setStoreyRange(val: string) {
        this.storeyRange = val;
    }

    public setStreetName(val: string) {
        this.streetName = val;
    }

    public setTown(val: string) {
        this.town = val;
    }

    public setPrice(val: number) {
        this.resalePrice = val;
    }

}