import {ADD_PERSON} from '../constant'

//创建添加人员的action
export const createAddPersonAction = personObj => ({
    type: ADD_PERSON,
    data: personObj
});