import { Store } from "redux";
import { StoreState } from "../models/RootState";

export class StoreHelper {
    private static _store: Store<StoreState>;

    public static setStoreInstance(store: Store<StoreState>): void {
        if (!store) {
            throw new Error("Store instance cannot be null/undefined");
        }

        StoreHelper._store = store;
    }

    public static getState(): StoreState {
        return StoreHelper._store.getState();
    }

    public static dispatch(action: any): void {
        StoreHelper._store.dispatch(action);
    }
}
