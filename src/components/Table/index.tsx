import { Table, TableProps, Typography } from 'antd';
import React, { useState } from 'react';
import './styles.css';

export declare type Key = React.Key;

interface RenderSelection {
  type: 'checkbox' | 'radio';
  selections: string[];
  selectedRowKeys: Key[];
  onChange(selectedRowKeys: Key[]): void;
}

type Props = Omit<TableProps<never>, 'sticky' | 'scroll'> & {
  // eslint-disable-next-line react/no-unused-prop-types
  tableName?: string;
  dataExpand?: string[];
  isBorder?: boolean;
  scrollY?: string | number;
  scrollX?: string | number;
  isRenderSelection?: boolean;
  isPagination?: boolean;
};

const CoreTable = (props: Props) => {
  const {
    columns,
    dataSource,
    dataExpand,
    expandable,
    rowSelection,
    isBorder = true,
    scrollY = '600px',
    scrollX = 'max-content',
    isRenderSelection = false,
    pagination = {
      defaultPageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['5', '10', '15'],
      showTotal: (total) => {
        return <Typography.Title level={4}>{`Total : ${total}`}</Typography.Title>;
      },
    },
    isPagination = true,
  } = props;

  const [selectedRows, setSelectedRows] = useState([]);

  // Help Render RowSelection
  const isSelection: RenderSelection = {
    type: 'checkbox',
    selectedRowKeys: selectedRows,
    onChange: (key: never) => {
      setSelectedRows(key);
    },
    selections: [Table.SELECTION_ALL, Table.SELECTION_NONE, Table.SELECTION_INVERT],
  };

  // Help ExpandedRow Fast
  const expand = () => {
    return {
      // eslint-disable-next-line consistent-return
      expandedRowRender: (record: never) => {
        if (dataExpand) {
          return dataExpand.map((item, index) => <p key={`expand-${index}`}>{record[item]}</p>);
        }
      },
    };
  };

  console.log('columns :>> ', columns);

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      sticky
      scroll={{ x: scrollX, y: scrollY }}
      bordered={isBorder}
      rowSelection={isRenderSelection ? isSelection : rowSelection}
      expandable={expandable || (dataExpand ? expand() : undefined)}
      // rowClassName='bg-blue-400'
      pagination={isPagination ? pagination : false}
      title={() => <Typography.Title level={5}>Customer Need</Typography.Title>}
    />
  );
};

export default CoreTable;
