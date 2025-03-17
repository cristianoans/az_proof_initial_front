import { Pagination, Form } from 'react-bootstrap';

interface PaginationControlsProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

const PaginationControls = ({
    itemsPerPage,
    currentPage,
    totalPages,
    onPageChange,
    onItemsPerPageChange,
}: PaginationControlsProps) => {
    const itemsPerPageOptions = [6, 10, 20, 50];

    const getPageNumbers = () => {
        const maxPagesToShow = 5;
        const pages: (number | string)[] = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (startPage > 1) {
            pages.unshift('...');
            pages.unshift(1);
        }

        if (endPage < totalPages) {
            pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="pagination-controls d-flex justify-content-between align-items-center">
            <Pagination className="d-flex align-items-center">
                <Pagination.First
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    className="btn-navigation"
                />
                <Pagination.Prev
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="btn-navigation"
                />
                {getPageNumbers().map((page, index) =>
                    typeof page === 'string' ? (
                        <Pagination.Ellipsis key={`ellipsis-${index}`} disabled />
                    ) : (
                        <Pagination.Item
                            key={page}
                            active={page === currentPage}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </Pagination.Item>
                    )
                )}
                <Pagination.Next
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="btn-navigation"
                />
                <Pagination.Last
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="btn-navigation"
                />
            </Pagination>

            <span className="pagination-info">
                {currentPage} de {totalPages} páginas
            </span>

            <Form.Group className="d-flex align-items-center">
                <Form.Label className="mb-0 me-2">Linhas por página:</Form.Label>
                <Form.Select
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                    style={{ width: 'auto' }}
                >
                    {itemsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
};

export default PaginationControls;