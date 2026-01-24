/**
 * Pagination size options
 */
export type PaginationSize = 'sm' | 'lg' | undefined;

/**
 * Props for the Pagination container component
 */
export interface PaginationProps {
  /** Pagination content (PaginationItem components) */
  children: React.ReactNode;
  /** Size variant */
  size?: PaginationSize;
  /** Accessible label */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Pagination container component.
 * 
 * Wraps pagination items in a nav element with proper ARIA attributes.
 * 
 * @example
 * ```tsx
 * <Pagination>
 *   <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
 *   <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
 * </Pagination>
 * ```
 */
export function Pagination({
  children,
  size,
  ariaLabel = 'Page navigation',
  className = '',
}: PaginationProps) {
  const classes = [
    'pagination',
    size ? `pagination-${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <nav aria-label={ariaLabel}>
      <ul className={classes}>{children}</ul>
    </nav>
  );
}

/**
 * Props for the PaginationItem component
 */
export interface PaginationItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * PaginationItem component for individual page items.
 */
export function PaginationItem({
  children,
  active = false,
  disabled = false,
  className = '',
}: PaginationItemProps) {
  const classes = [
    'page-item',
    active ? 'active' : '',
    disabled ? 'disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <li className={classes} aria-current={active ? 'page' : undefined}>
      {children}
    </li>
  );
}

/**
 * Props for the PaginationLink component
 */
export interface PaginationLinkProps {
  /** Link content */
  children: React.ReactNode;
  /** Link href */
  href?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent) => void;
  /** Tab index for disabled links */
  tabIndex?: number;
  /** Accessible label */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * PaginationLink component for page links.
 */
export function PaginationLink({
  children,
  href = '#',
  onClick,
  tabIndex,
  ariaLabel,
  className = '',
}: PaginationLinkProps) {
  const classes = ['page-link', className].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a
      className={classes}
      href={href}
      onClick={handleClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

/**
 * Props for PaginationPrev component
 */
export interface PaginationNavProps {
  /** Click handler */
  onClick?: (e: React.MouseEvent) => void;
  /** Whether the nav is disabled */
  disabled?: boolean;
  /** Link href */
  href?: string;
  /** Custom content (overrides default) */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * PaginationPrev - Previous page navigation link.
 */
export function PaginationPrev({
  onClick,
  disabled = false,
  href = '#',
  children,
  className = '',
}: PaginationNavProps) {
  return (
    <PaginationItem disabled={disabled} className={className}>
      <PaginationLink
        href={href}
        onClick={onClick}
        tabIndex={disabled ? -1 : undefined}
        ariaLabel="Previous"
      >
        {children ?? <span aria-hidden="true">&laquo;</span>}
      </PaginationLink>
    </PaginationItem>
  );
}

/**
 * PaginationNext - Next page navigation link.
 */
export function PaginationNext({
  onClick,
  disabled = false,
  href = '#',
  children,
  className = '',
}: PaginationNavProps) {
  return (
    <PaginationItem disabled={disabled} className={className}>
      <PaginationLink
        href={href}
        onClick={onClick}
        tabIndex={disabled ? -1 : undefined}
        ariaLabel="Next"
      >
        {children ?? <span aria-hidden="true">&raquo;</span>}
      </PaginationLink>
    </PaginationItem>
  );
}

/**
 * PaginationFirst - First page navigation link.
 */
export function PaginationFirst({
  onClick,
  disabled = false,
  href = '#',
  children,
  className = '',
}: PaginationNavProps) {
  return (
    <PaginationItem disabled={disabled} className={className}>
      <PaginationLink
        href={href}
        onClick={onClick}
        tabIndex={disabled ? -1 : undefined}
        ariaLabel="First"
      >
        {children ?? <span aria-hidden="true">&laquo;&laquo;</span>}
      </PaginationLink>
    </PaginationItem>
  );
}

/**
 * PaginationLast - Last page navigation link.
 */
export function PaginationLast({
  onClick,
  disabled = false,
  href = '#',
  children,
  className = '',
}: PaginationNavProps) {
  return (
    <PaginationItem disabled={disabled} className={className}>
      <PaginationLink
        href={href}
        onClick={onClick}
        tabIndex={disabled ? -1 : undefined}
        ariaLabel="Last"
      >
        {children ?? <span aria-hidden="true">&raquo;&raquo;</span>}
      </PaginationLink>
    </PaginationItem>
  );
}

/**
 * PaginationEllipsis - Ellipsis indicator for skipped pages.
 */
export function PaginationEllipsis({ className = '' }: { className?: string }) {
  return (
    <PaginationItem disabled className={className}>
      <span className="page-link">…</span>
    </PaginationItem>
  );
}

/**
 * Props for SimplePagination component
 */
export interface SimplePaginationProps {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Size variant */
  size?: PaginationSize;
  /** Show first/last buttons */
  showFirstLast?: boolean;
  /** Show prev/next buttons */
  showPrevNext?: boolean;
  /** Maximum number of page buttons to show */
  maxVisiblePages?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SimplePagination - A fully controlled pagination component.
 * 
 * Automatically handles page number display, ellipsis, and navigation.
 * 
 * @example
 * ```tsx
 * const [page, setPage] = useState(1);
 * 
 * <SimplePagination
 *   currentPage={page}
 *   totalPages={10}
 *   onPageChange={setPage}
 * />
 * ```
 */
export function SimplePagination({
  currentPage,
  totalPages,
  onPageChange,
  size,
  showFirstLast = false,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = '',
}: SimplePaginationProps) {
  // Calculate visible page numbers
  const getVisiblePages = (): (number | 'ellipsis')[] => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    // Adjust if we're near the beginning
    if (currentPage <= halfVisible) {
      endPage = maxVisiblePages - 1;
    }
    
    // Adjust if we're near the end
    if (currentPage > totalPages - halfVisible) {
      startPage = totalPages - maxVisiblePages + 2;
    }

    // Always show first page
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis');
      }
    }

    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      if (i > 0 && i <= totalPages) {
        pages.push(i);
      }
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination size={size} className={className}>
      {showFirstLast && (
        <PaginationFirst
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        />
      )}
      
      {showPrevNext && (
        <PaginationPrev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
      )}

      {visiblePages.map((page, index) =>
        page === 'ellipsis' ? (
          <PaginationEllipsis key={`ellipsis-${index}`} />
        ) : (
          <PaginationItem key={page} active={page === currentPage}>
            <PaginationLink onClick={() => onPageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        )
      )}

      {showPrevNext && (
        <PaginationNext
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      )}
      
      {showFirstLast && (
        <PaginationLast
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      )}
    </Pagination>
  );
}

export default Pagination;
