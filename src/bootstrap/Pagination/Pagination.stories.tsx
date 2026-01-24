import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrev,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
  SimplePagination,
} from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Bootstrap/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Pagination for navigating through multiple pages of content.

## Features
- **Sizes**: Small, default, and large variants
- **Navigation**: First, previous, next, last controls
- **Ellipsis**: Smart page number truncation
- **Controlled**: Full control with SimplePagination

## Components
- \`Pagination\` - Container nav element
- \`PaginationItem\` - Individual page item
- \`PaginationLink\` - Clickable page link
- \`PaginationPrev\` / \`PaginationNext\` - Navigation controls
- \`PaginationFirst\` / \`PaginationLast\` - Jump to first/last
- \`PaginationEllipsis\` - Truncation indicator
- \`SimplePagination\` - All-in-one controlled component
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: 'Size variant',
      control: { type: 'select' },
      options: [undefined, 'sm', 'lg'],
    },
    ariaLabel: {
      description: 'Accessible label for navigation',
      control: { type: 'text' },
      table: { defaultValue: { summary: 'Page navigation' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
    </Pagination>
  ),
};

export const WithActiveState: Story = {
  name: 'With Active State',
  render: () => (
    <Pagination>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `active` prop to indicate the current page.',
      },
    },
  },
};

export const WithDisabledState: Story = {
  name: 'With Disabled State',
  render: () => (
    <Pagination>
      <PaginationItem disabled>
        <PaginationLink href="#" tabIndex={-1}>Previous</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">Next</PaginationLink>
      </PaginationItem>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disable navigation controls when at the first or last page.',
      },
    },
  },
};

export const WithPrevNext: Story = {
  name: 'With Previous/Next',
  render: () => (
    <Pagination>
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use PaginationPrev and PaginationNext for navigation arrows.',
      },
    },
  },
};

export const WithFirstLast: Story = {
  name: 'With First/Last',
  render: () => (
    <Pagination>
      <PaginationFirst />
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext />
      <PaginationLast />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Include first/last page navigation for quick jumping.',
      },
    },
  },
};

export const WithTextLabels: Story = {
  name: 'With Text Labels',
  render: () => (
    <Pagination>
      <PaginationPrev>Previous</PaginationPrev>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext>Next</PaginationNext>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use text labels instead of arrow icons.',
      },
    },
  },
};

export const WithEllipsis: Story = {
  name: 'With Ellipsis',
  render: () => (
    <Pagination>
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">6</PaginationLink>
      </PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>
        <PaginationLink href="#">10</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use ellipsis to indicate skipped page numbers.',
      },
    },
  },
};

export const SmallSize: Story = {
  name: 'Small Size',
  render: () => (
    <Pagination size="sm">
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small pagination for compact layouts.',
      },
    },
  },
};

export const LargeSize: Story = {
  name: 'Large Size',
  render: () => (
    <Pagination size="lg">
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large pagination for more prominent display.',
      },
    },
  },
};

export const AllSizes: Story = {
  name: 'All Sizes Comparison',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div>
        <small className="text-muted d-block mb-1">Small</small>
        <Pagination size="sm">
          <PaginationPrev />
          <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
          <PaginationItem active><PaginationLink href="#">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
          <PaginationNext />
        </Pagination>
      </div>
      <div>
        <small className="text-muted d-block mb-1">Default</small>
        <Pagination>
          <PaginationPrev />
          <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
          <PaginationItem active><PaginationLink href="#">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
          <PaginationNext />
        </Pagination>
      </div>
      <div>
        <small className="text-muted d-block mb-1">Large</small>
        <Pagination size="lg">
          <PaginationPrev />
          <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
          <PaginationItem active><PaginationLink href="#">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
          <PaginationNext />
        </Pagination>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all pagination sizes.',
      },
    },
  },
};

export const CenteredAlignment: Story = {
  name: 'Centered Alignment',
  render: () => (
    <Pagination className="justify-content-center">
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Center pagination using flexbox utilities.',
      },
    },
  },
};

export const EndAlignment: Story = {
  name: 'End Alignment',
  render: () => (
    <Pagination className="justify-content-end">
      <PaginationPrev />
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationNext />
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Right-align pagination using flexbox utilities.',
      },
    },
  },
};

export const InteractiveBasic: Story = {
  name: 'Interactive (Basic)',
  render: function InteractiveStory() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
      <div>
        <p className="mb-3">Current page: <strong>{currentPage}</strong></p>
        <Pagination>
          <PaginationPrev
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page} active={page === currentPage}>
              <PaginationLink onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationNext
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive pagination with click handlers.',
      },
    },
  },
};

export const SimplePaginationBasic: Story = {
  name: 'SimplePagination',
  render: function SimpleStory() {
    const [page, setPage] = useState(1);

    return (
      <div>
        <p className="mb-3">Page <strong>{page}</strong> of 10</p>
        <SimplePagination
          currentPage={page}
          totalPages={10}
          onPageChange={setPage}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'SimplePagination handles all the logic automatically.',
      },
    },
  },
};

export const SimplePaginationWithFirstLast: Story = {
  name: 'SimplePagination with First/Last',
  render: function SimpleFirstLastStory() {
    const [page, setPage] = useState(5);

    return (
      <div>
        <p className="mb-3">Page <strong>{page}</strong> of 20</p>
        <SimplePagination
          currentPage={page}
          totalPages={20}
          onPageChange={setPage}
          showFirstLast
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Include first/last buttons for quick navigation.',
      },
    },
  },
};

export const SimplePaginationSmall: Story = {
  name: 'SimplePagination (Small)',
  render: function SimpleSmallStory() {
    const [page, setPage] = useState(1);

    return (
      <SimplePagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        size="sm"
      />
    );
  },
};

export const SimplePaginationLarge: Story = {
  name: 'SimplePagination (Large)',
  render: function SimpleLargeStory() {
    const [page, setPage] = useState(1);

    return (
      <SimplePagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        size="lg"
      />
    );
  },
};

export const SimplePaginationManyPages: Story = {
  name: 'SimplePagination (Many Pages)',
  render: function ManyPagesStory() {
    const [page, setPage] = useState(1);

    return (
      <div>
        <p className="mb-3">Page <strong>{page}</strong> of 100</p>
        <SimplePagination
          currentPage={page}
          totalPages={100}
          onPageChange={setPage}
          showFirstLast
          maxVisiblePages={7}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Handles many pages with smart ellipsis placement.',
      },
    },
  },
};

export const SimplePaginationFewPages: Story = {
  name: 'SimplePagination (Few Pages)',
  render: function FewPagesStory() {
    const [page, setPage] = useState(1);

    return (
      <SimplePagination
        currentPage={page}
        totalPages={3}
        onPageChange={setPage}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Works correctly with just a few pages.',
      },
    },
  },
};

export const TablePagination: Story = {
  name: 'Table Pagination Example',
  render: function TableStory() {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const totalItems = 95;
    const totalPages = Math.ceil(totalItems / perPage);

    const startItem = (page - 1) * perPage + 1;
    const endItem = Math.min(page * perPage, totalItems);

    return (
      <div className="card">
        <div className="card-body">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.min(perPage, totalItems - (page - 1) * perPage) }, (_, i) => {
                const itemNum = startItem + i;
                return (
                  <tr key={i}>
                    <td>{itemNum}</td>
                    <td>User {itemNum}</td>
                    <td>user{itemNum}@example.com</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted">Show</span>
            <select
              className="form-select form-select-sm"
              style={{ width: 'auto' }}
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-muted">
              Showing {startItem}-{endItem} of {totalItems}
            </span>
          </div>
          <SimplePagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            size="sm"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete table pagination with per-page selector.',
      },
    },
  },
};

export const CardGridPagination: Story = {
  name: 'Card Grid Example',
  render: function CardGridStory() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    const totalItems = 18;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const items = Array.from({ length: itemsPerPage }, (_, i) => startIndex + i + 1)
      .filter((n) => n <= totalItems);

    return (
      <div>
        <div className="row g-3 mb-4">
          {items.map((num) => (
            <div key={num} className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Item {num}</h5>
                  <p className="card-text text-muted">Card content here</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <SimplePagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination for a card grid layout.',
      },
    },
  },
};
