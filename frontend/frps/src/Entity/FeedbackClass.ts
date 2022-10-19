export default class FeedbackClass {
    private feedBackId: number;
    private name: string;
    private email: string;
    private feedback: string;
    private createdAt: Date;

    constructor(
        feedBackId: number,
        name: string,
        email: string,
        feedback: string,
        createdAt: Date
    ) {
        this.feedBackId = feedBackId;
        this.name = name;
        this.email = email;
        this.feedback = feedback;
        this.createdAt = createdAt;
    }

    // Getter and Setter functions to prevent users from editing attributes directly!

    public getId() {
        return this.feedBackId;
    }

    public getName() {
        return this.name;
    }

    public getEmail() {
        return this.email;
    }

    public getFeedback() {
        return this.feedback;
    }

    public getCreatedAt() {
        return this.createdAt;
    }

    public setCreatedAt(val: Date) {
        this.createdAt = val;
    }

    public setName(val: string) {
        this.name = val;
    }

    public setEmail(val: string) {
        this.email = val;
    }

    public setFeedback(val: string) {
        this.feedback = val;
    }

}