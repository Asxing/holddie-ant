import { Form, Input, Modal, Cascader } from 'antd';

import { FormComponentProps } from 'antd/es/form';
import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { CascaderOptionType } from 'antd/lib/cascader';

const FormItem = Form.Item;

interface CreateFormProps extends FormComponentProps {
  modalVisible: boolean;
  handleAdd: (fieldsValue: {
    id: number;
    title: string;
    code: string;
    description: string;
    moudelValue: Array<string>;
  }) => void;
  handleModalVisible: () => void;
  menus: CascaderOptionType[];
}

const CreateForm: React.SFC<CreateFormProps> = props => {
  const { modalVisible, form, handleAdd, handleModalVisible, menus } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };
  const fieldNames = { value: 'id', label: 'title' };

  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="功能名称">
        {form.getFieldDecorator('title', {
          rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="功能编码">
        {form.getFieldDecorator('code', {
          rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="功能描述">
        {form.getFieldDecorator('description', {
          rules: [{ message: '请输入至少五个字符的规则描述！', min: 2 }],
        })(<TextArea placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="菜单列表">
        {form.getFieldDecorator('moudelValue', {
          rules: [{ required: true }],
        })(<Cascader options={menus} fieldNames={fieldNames} />)}
      </FormItem>
    </Modal>
  );
};

export default CreateForm;
