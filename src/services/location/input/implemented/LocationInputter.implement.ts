import instanceChecker from "@/modules/check/instanceChecker";
import AbstractedLocationInputter from "../abstract/LocationInputter.abstract";

export default class ImplementedLocationInputter extends AbstractedLocationInputter {
  protected manualInput: string;

  constructor(initialInput = "") {
    super();

    instanceChecker(new.target, ImplementedLocationInputter);

    this.manualInput = initialInput;
  }

  public inputLocation(address: string): void {
    this.manualInput = address;
  }

  public clearInput(): void {
    this.manualInput = "";
  }
}

