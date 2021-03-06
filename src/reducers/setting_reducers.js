import { RECEIVE_SETTING, getSetting, receiveSetting } from '../actions/setting_actions';

const SettingReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SETTING:
      return action.setting
    default:
      return state
  }
}

export default SettingReducer;
