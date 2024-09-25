import type { TFilePath } from "../shared/file/filePath.type";
import type { TMessage } from "../shared/message.type";

export type TUploadResponse = {
  message: TMessage;
  filePath: TFilePath;
};
