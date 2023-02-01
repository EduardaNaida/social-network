import React, {FC} from 'react';
import styles from "./Paginator.module.css";
import {Pagination} from "@mui/material";

export type PropsPaginatorType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (value: number) => void
}

export const Paginator: FC<PropsPaginatorType> = ({
                                                    pageSize, currentPage, totalUsersCount,
                                                    onPageChanged
                                                  }) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChanged(value)
  }
  return (
    <div>
          <Pagination
            count={pagesCount}
            onChange={handleChange}
            size={'large'}
          />
    </div>
  );
};