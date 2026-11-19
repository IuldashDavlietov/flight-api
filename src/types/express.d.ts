import type { HydratedDocument, Model, QueryFilter } from "mongoose";
import type { AccessData, ListDetails, ModelPopulate } from "./api";

declare global {
  namespace Express {
    interface Request {
      user?: AccessData | null;
    }

    interface Response {
      getModelList<T>(
        Model: Model<T>,
        customFilter?: QueryFilter<T>,
        populate?: ModelPopulate,
      ): Promise<HydratedDocument<T>[]>;
      getModelListDetails<T>(Model: Model<T>, customFilter?: QueryFilter<T>): Promise<ListDetails>;
    }

  }
}
