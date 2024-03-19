import ReactPaginate from 'react-paginate';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import s from './Pagination.module.scss';

export interface IPagination2 {
  totalProducts: number;
  productsPerPage: number;
  handleClick: (value: number) => void;
}

type TDataPaginate = {
  selected: number;
};

export function Pagination({
  totalProducts,
  productsPerPage,
  handleClick,
}: IPagination2) {
  const pageCount = totalProducts / productsPerPage;

  const handleClickPage = (data: TDataPaginate) => {
    const currentPage = data.selected + 1;
    handleClick(currentPage);
  };

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel={<RiArrowRightSLine className={s.paginationArrow} />}
      previousLabel={<RiArrowLeftSLine className={s.paginationArrow} />}
      pageCount={pageCount}
      marginPagesDisplayed={2} //quantity after dots
      pageRangeDisplayed={3}
      containerClassName={s.paginationList}
      pageLinkClassName={s.paginationItemLink}
      previousClassName={s.paginationPrev}
      previousLinkClassName={s.paginationPrevLink}
      nextClassName={s.paginationNext}
      nextLinkClassName={s.paginationNextLink}
      breakLinkClassName={s.paginationDotsLink}
      activeLinkClassName={s.paginationItemLinkActive}
      onPageChange={handleClickPage}
      renderOnZeroPageCount={null}
    />
  );
}
