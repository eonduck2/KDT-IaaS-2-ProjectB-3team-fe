// NOTE: 지도 API의 타입을 강하게 잡야둬야함
export default interface TMapDisplayer {
  // !!
  // map: ?????
  // !!

  displayLocationOnMap(location: string): void;

  clearMap(): void;
}
