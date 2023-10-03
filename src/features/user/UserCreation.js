import React from "react";

import { Card, Form, Input, Button, message } from "antd";

import { Link, Navigate, useNavigate } from "react-router-dom";

const UserCreation = () => {
  return (
    <div>
      <Form className="space-y-4 md:space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray myfont">
            Email
          </label>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Enter Email Id" },

              {
                validator: (_, value) => {
                  if (value && value?.includes(" ")) {
                    return Promise.reject("Enter valid email id");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
          >
            <Input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500 subtitle"
              placeholder="Srini@Wakeflo.com"
            />
          </Form.Item>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray myfont">
            name
          </label>

          <Input
            id="name"
            type="name"
            name="name"
            autoComplete="off"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500 subtitle"
            placeholder="Srini"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray myfont">
            Password
          </label>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Enter Password" },

              {
                validator: (_, value) => {
                  if (value && value?.includes(" ")) {
                    return Promise.reject("Enter valid password");
                  } else {
                    return Promise.resolve();
                  }
                },
              },
            ]}
          >
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 subtitle"
            />
          </Form.Item>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 py-2 text-white rounded subtitle hover:bg-purple-900"
        >
          Sign in
        </button>
      </Form>
    </div>
  );
};

export default UserCreation;
