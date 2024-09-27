import AbstractedLocationInputter from "../abstract/LocationInputter.abstract";

export default class ImplementedLocationInputter extends AbstractedLocationInputter {
  protected manualInput: string;

  constructor(initialInput = "") {
    super();

    if (new.target === ImplementedLocationInputter) {
      throw new Error("Cannot create an instance of an abstract class.");
    }

    this.manualInput = initialInput;
  }

  public inputLocation(address: string): void {
    this.manualInput = address;
  }

  public clearInput(): void {
    this.manualInput = "";
  }
}

