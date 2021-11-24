import { TYPES } from "../action/summaryActions";
import menu from "../data-menu/menu.json";

export const summaryInitialState={
  menu,
  summary:[],
};

export function summaryReducer(state,action){
  switch (action.type) {
    case TYPES.ADD_TO_SUMMARY:{

    }
    case TYPES.REMOVE_ONE_OF_SUMMARY:{

    }
    case TYPES.REMOVE_ALL_OF_SUMMARY:{

    }
    case TYPES.CLEAR_SUMMARY:{

    }
    default:
      return state;
  }
}