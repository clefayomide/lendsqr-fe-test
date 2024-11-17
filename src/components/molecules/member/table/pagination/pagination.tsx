import React from "react";
import style from "./pagination.module.scss";
import Typography from "@/components/atom/typography/typography";
import Select from "@/components/atom/form/select";
import { PaginationPropType } from "@/types";
import Button from "@/components/atom/button/button";
import { ChevronLeft, ChevronRight } from "@/assets";
import { classnames } from "@/utils";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationPropType) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftEdge = 2;
      const rightEdge = totalPages - 1;
      const visibleRange = 2;

      pages.push(1);
      if (currentPage > leftEdge + visibleRange) {
        pages.push("...");
      }

      for (
        let i = Math.max(currentPage - visibleRange, leftEdge);
        i <= Math.min(currentPage + visibleRange, rightEdge);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < rightEdge - visibleRange) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={style.pagination}>
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={style.prev}
      >
        <ChevronLeft />
      </Button>

      {getPageNumbers().map((page, index) => (
        <Button
          key={page}
          onClick={() => typeof page === "number" && handlePageClick(page)}
          disabled={typeof page !== "number"}
          className={classnames(
            currentPage === page ? style.active : style.inactive,
            typeof page === "string" || "number" ? style.pointer : ""
          )}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={style.next}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

const PerPage = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={style.wrapper}>
      <Typography className={style.showing}>Showing</Typography>
      <Select
        onChange={onChange}
        options={[
          { value: "10", label: 10 },
          { value: "20", label: 20 },
          { value: "30", label: 30 },
          { value: "40", label: 40 },
          { value: "50", label: 50 },
        ]}
      />
      <Typography className={style.count}>out of 100</Typography>
    </div>
  );
};

Pagination.PerPage = PerPage;
export default Pagination;
