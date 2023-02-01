import React, {FC} from 'react';
import styles from "./Paginator.module.css";

export type PropsPaginatorType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PropsPaginatorType> = ({pageSize, currentPage, totalUsersCount, onPageChanged}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p, index) => {
        return <span key={index} className={currentPage === p ? styles.selectedPage : 'default'}
                     onClick={(e) => {
                       onPageChanged(p)
                     }}>{p}</span>
      })
      }
    </div>
  );
};