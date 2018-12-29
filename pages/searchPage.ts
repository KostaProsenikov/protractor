import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("input.gLFyf");
        this.searchButton = $("input[value='Google Search']");
        this.logo = $("#logo > img");
    }
}
