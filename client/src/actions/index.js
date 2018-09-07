import { TEST_TYPE } from "./types";

export function test() {
  return {
    type: TEST_TYPE,
    payload: 'test_payload'
  }
}