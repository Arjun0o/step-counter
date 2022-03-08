import stepReducer, {increment} from '../src/store/stepSlice';

test('should return the initial state', () => {
  expect(stepReducer(undefined, {} as any)).toEqual({
    value: 0,
  });
});

test('should handle the first step being added to the count', () => {
  const previousState = {
    value: 0,
  };
  expect(stepReducer(previousState, increment())).toEqual({
    value: 1,
  });
});
