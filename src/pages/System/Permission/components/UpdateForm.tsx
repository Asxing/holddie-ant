import { Form, Input, Modal, Cascader } from 'antd';

import { FormComponentProps } from 'antd/es/form';
import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { CascaderOptionType } from 'antd/lib/cascader';
import { TableListItem } from '../data';

const FormItem = Form.Item;

export interface FormValsType extends Partial<TableListItem> {}

interface UpdateFormProps extends FormComponentProps {
  updateModalVisible: boolean;
  handleUpdate: (fieldsValue: {
    id: number;
    title: string;
    code: string;
    description: string;
    moudelValue: Array<string>;
  }) => void;
  handleSearch: () => void;
  handleUpdateModalVisible: () => void;
  menus: CascaderOptionType[];
  stepFormValues: Partial<TableListItem>;
}

const UpdateForm: React.SFC<UpdateFormProps> = props => {
  const {
    stepFormValues,
    handleUpdate,
    updateModalVisible,
    handleSearch,
    form,
    handleUpdateModalVisible,
    menus,
  } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleUpdate(fieldsValue);
      handleSearch();
    });
  };
  const fieldNames = { value: 'id', label: 'title' };

  console.log('数据:', stepFormValues);
  var newvalue;
  if (stepFormValues.moudelValue) {
    newvalue = stepFormValues.moudelValue.map(Number);
  }
  console.log('menuPath:', newvalue);

  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={updateModalVisible}
      onOk={okHandle}
      onCancel={() => handleUpdateModalVisible()}
    >
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="">
        {form.getFieldDecorator('id', {
          initialValue: stepFormValues.id,
        })(<Input placeholder="请输入" hidden={true} />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="功能名称">
        {form.getFieldDecorator('title', {
          initialValue: stepFormValues.title,
          rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="功能编码">
        {form.getFieldDecorator('code', {
          initialValue: stepFormValues.code,
          rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 2 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="功能描述">
        {form.getFieldDecorator('description', {
          initialValue: stepFormValues.description,
          rules: [{ message: '请输入至少五个字符的规则描述！', min: 2 }],
        })(<TextArea placeholder="请输入" />)}
      </FormItem>
      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="菜单列表">
        {form.getFieldDecorator('moudelValue', {
          initialValue: newvalue,
          rules: [{ required: true }],
        })(<Cascader options={menus} fieldNames={fieldNames} />)}
      </FormItem>
    </Modal>
  );
};

export default UpdateForm;
