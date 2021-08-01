import { combineEpics, ofType } from 'redux-observable';
import {debounceTime, delay, EMPTY, map, mergeMap, of, switchMap, take} from 'rxjs';

const onIncrementEpic = action$ => action$.pipe(
    ofType('INCREMENT', 'DECREMENT'),
    // debounceTime(1000),
    delay(500),
    map(() => ({type: 'CHANGE_SUCCESS'}))
)

const onIncrementAndChangeSuccessEpic = action$ => action$.pipe(
    ofType('INCREMENT'),
    switchMap(() => action$.pipe(
        ofType('CHANGE_SUCCESS'),
        take(1),
        map(() => ({type: 'TOGGLED'}))
    ))
)

const onButtonClickEpic = (action$, state) => action$.pipe(
    ofType('BUTTON_CLICK'),
    debounceTime(1000),
    mergeMap(() => {
        console.log(state.value.buttons);
        return EMPTY;
    })
)

export default combineEpics(onIncrementEpic, onIncrementAndChangeSuccessEpic, onButtonClickEpic);