import ILocationInputter from "@/interfaces/services/location/input/LocationInputter.interface";

export default abstract class AbstractedLocationInputter
  implements ILocationInputter
{
  protected abstract manualInput: string;

  public get _manualInput(): string {
    return this.manualInput;
  }

  public set _manualInput(value: string) {
    this.manualInput = value;
  }

  public getManualInput(): string {
    return this.manualInput;
  }

  public setManualInput(value: string): void {
    this.manualInput = value;
  }

  public abstract inputLocation(address: string): void;

  public abstract clearInput(): void;
}
