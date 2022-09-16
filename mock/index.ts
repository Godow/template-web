import { MockMethod } from "vite-plugin-mock";
import { mock } from "mockjs";
var mockdata = mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
});

export default [
  {
    url: "/api/get",
    method: "get",
    response: ({}) => {
      return {
        success: true,
        data: mockdata,
      };
    },
  },
] as MockMethod[];
