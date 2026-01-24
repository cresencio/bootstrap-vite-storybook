import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Progress, ProgressBar, SimpleProgress } from './Progress';
import type { ProgressVariant } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Bootstrap/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Progress bars for displaying completion status or loading states.

## Features
- **Variants**: All Bootstrap theme colors
- **Striped**: Optional striped pattern
- **Animated**: Animated stripes for active states
- **Labels**: Show percentage or custom labels
- **Stacked**: Multiple bars in one container
- **Custom Height**: Adjust bar thickness

## Components
- \`Progress\` - Container with optional simple value prop
- \`ProgressBar\` - Individual bar segment for stacking
- \`SimpleProgress\` - Simplified single-bar component
        `,
      },
    },
  },
  argTypes: {
    value: {
      description: 'Current progress value (0-100)',
      control: { type: 'range', min: 0, max: 100 },
    },
    variant: {
      description: 'Color variant',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'],
    },
    striped: {
      description: 'Show striped pattern',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    animated: {
      description: 'Animate the stripes (requires striped)',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    showLabel: {
      description: 'Show percentage label inside bar',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      description: 'Custom label (overrides percentage)',
      control: { type: 'text' },
    },
    height: {
      description: 'Custom height (px or CSS value)',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithLabel: Story = {
  name: 'With Label',
  args: {
    value: 75,
    showLabel: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Display the percentage value inside the progress bar.',
      },
    },
  },
};

export const CustomLabel: Story = {
  name: 'Custom Label',
  args: {
    value: 60,
    label: '60 of 100 items',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use a custom label instead of the default percentage.',
      },
    },
  },
};

export const Variants: Story = {
  name: 'Color Variants',
  render: () => {
    const variants: ProgressVariant[] = [
      'primary',
      'secondary', 
      'success',
      'danger',
      'warning',
      'info',
      'dark',
    ];

    return (
      <div className="d-flex flex-column gap-3">
        {variants.map((variant) => (
          <div key={variant}>
            <small className="text-muted text-capitalize">{variant}</small>
            <Progress value={60} variant={variant} />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bars in all Bootstrap theme colors.',
      },
    },
  },
};

export const Striped: Story = {
  name: 'Striped',
  args: {
    value: 65,
    striped: true,
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Add a striped pattern to the progress bar.',
      },
    },
  },
};

export const StripedVariants: Story = {
  name: 'Striped Variants',
  render: () => {
    const variants: ProgressVariant[] = [
      'primary',
      'success',
      'info',
      'warning',
      'danger',
    ];

    return (
      <div className="d-flex flex-column gap-3">
        {variants.map((variant, index) => (
          <Progress
            key={variant}
            value={20 + index * 15}
            variant={variant}
            striped
            showLabel
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Striped progress bars in different variants.',
      },
    },
  },
};

export const Animated: Story = {
  name: 'Animated Stripes',
  args: {
    value: 75,
    striped: true,
    animated: true,
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Animate the stripes for an active/loading state.',
      },
    },
  },
};

export const AnimatedVariants: Story = {
  name: 'Animated Variants',
  render: () => {
    const variants: ProgressVariant[] = [
      'primary',
      'success',
      'warning',
      'danger',
    ];

    return (
      <div className="d-flex flex-column gap-3">
        {variants.map((variant) => (
          <Progress
            key={variant}
            value={75}
            variant={variant}
            animated
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Animated striped bars in different colors.',
      },
    },
  },
};

export const CustomHeights: Story = {
  name: 'Custom Heights',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div>
        <small className="text-muted">1px</small>
        <Progress value={50} height={1} />
      </div>
      <div>
        <small className="text-muted">4px</small>
        <Progress value={50} height={4} />
      </div>
      <div>
        <small className="text-muted">Default (~16px)</small>
        <Progress value={50} />
      </div>
      <div>
        <small className="text-muted">24px</small>
        <Progress value={50} height={24} showLabel />
      </div>
      <div>
        <small className="text-muted">32px</small>
        <Progress value={50} height={32} showLabel />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize the height of progress bars.',
      },
    },
  },
};

export const Stacked: Story = {
  name: 'Stacked Bars',
  render: () => (
    <Progress>
      <ProgressBar value={15} variant="success" />
      <ProgressBar value={30} variant="warning" />
      <ProgressBar value={20} variant="danger" />
    </Progress>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack multiple progress bars in a single container.',
      },
    },
  },
};

export const StackedWithLabels: Story = {
  name: 'Stacked with Labels',
  render: () => (
    <Progress height={24}>
      <ProgressBar value={35} variant="success" showLabel />
      <ProgressBar value={25} variant="info" showLabel />
      <ProgressBar value={15} variant="warning" showLabel />
    </Progress>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stacked bars with individual labels.',
      },
    },
  },
};

export const StackedStriped: Story = {
  name: 'Stacked Striped',
  render: () => (
    <Progress>
      <ProgressBar value={20} variant="primary" striped />
      <ProgressBar value={15} variant="success" striped />
      <ProgressBar value={25} variant="info" striped />
      <ProgressBar value={10} variant="warning" striped />
    </Progress>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stacked striped progress bars.',
      },
    },
  },
};

export const DynamicProgress: Story = {
  name: 'Dynamic Progress',
  render: function DynamicProgressStory() {
    const [value, setValue] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, [isRunning]);

    const reset = () => {
      setValue(0);
      setIsRunning(false);
    };

    const start = () => {
      if (value >= 100) reset();
      setIsRunning(true);
    };

    return (
      <div>
        <Progress
          value={value}
          variant={value >= 100 ? 'success' : 'primary'}
          animated={isRunning}
          showLabel
          height={24}
        />
        <div className="mt-3 d-flex gap-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={start}
            disabled={isRunning}
          >
            {value >= 100 ? 'Restart' : 'Start'}
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
          >
            Pause
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive progress bar with start/pause/reset controls.',
      },
    },
  },
};

export const FileUploadExample: Story = {
  name: 'File Upload Example',
  render: function FileUploadStory() {
    const [files] = useState([
      { name: 'document.pdf', progress: 100, status: 'complete' },
      { name: 'image.jpg', progress: 75, status: 'uploading' },
      { name: 'video.mp4', progress: 30, status: 'uploading' },
      { name: 'archive.zip', progress: 0, status: 'pending' },
    ]);

    const getVariant = (status: string): ProgressVariant => {
      switch (status) {
        case 'complete': return 'success';
        case 'uploading': return 'primary';
        default: return 'secondary';
      }
    };

    return (
      <div className="card">
        <div className="card-header">
          <h6 className="mb-0">File Upload Progress</h6>
        </div>
        <ul className="list-group list-group-flush">
          {files.map((file) => (
            <li key={file.name} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span>{file.name}</span>
                <small className="text-muted">
                  {file.status === 'complete' ? '✓ Complete' : `${file.progress}%`}
                </small>
              </div>
              <Progress
                value={file.progress}
                variant={getVariant(file.status)}
                animated={file.status === 'uploading'}
                height={6}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bars used in a file upload context.',
      },
    },
  },
};

export const SkillBars: Story = {
  name: 'Skill Bars Example',
  render: () => {
    const skills = [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 88 },
      { name: 'CSS/SCSS', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 60 },
    ];

    return (
      <div className="d-flex flex-column gap-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="d-flex justify-content-between mb-1">
              <span>{skill.name}</span>
              <span className="text-muted">{skill.level}%</span>
            </div>
            <Progress
              value={skill.level}
              variant={skill.level >= 80 ? 'success' : skill.level >= 60 ? 'info' : 'warning'}
              height={8}
            />
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bars as skill level indicators.',
      },
    },
  },
};

export const StorageUsage: Story = {
  name: 'Storage Usage Example',
  render: () => {
    const storage = {
      documents: 25,
      photos: 35,
      videos: 20,
      other: 5,
      free: 15,
    };

    return (
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">Storage Usage</h6>
          <p className="text-muted small">85 GB of 100 GB used</p>
          
          <Progress height={24} className="mb-3">
            <ProgressBar value={storage.documents} variant="primary" label="Docs" />
            <ProgressBar value={storage.photos} variant="success" label="Photos" />
            <ProgressBar value={storage.videos} variant="warning" label="Videos" />
            <ProgressBar value={storage.other} variant="info" label="Other" />
          </Progress>

          <div className="row text-center small">
            <div className="col">
              <span className="badge bg-primary">&nbsp;</span>
              <div>Documents</div>
              <div className="text-muted">25 GB</div>
            </div>
            <div className="col">
              <span className="badge bg-success">&nbsp;</span>
              <div>Photos</div>
              <div className="text-muted">35 GB</div>
            </div>
            <div className="col">
              <span className="badge bg-warning">&nbsp;</span>
              <div>Videos</div>
              <div className="text-muted">20 GB</div>
            </div>
            <div className="col">
              <span className="badge bg-info">&nbsp;</span>
              <div>Other</div>
              <div className="text-muted">5 GB</div>
            </div>
            <div className="col">
              <span className="badge bg-secondary">&nbsp;</span>
              <div>Free</div>
              <div className="text-muted">15 GB</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Stacked progress bars showing storage breakdown.',
      },
    },
  },
};

export const LoadingStates: Story = {
  name: 'Loading States',
  render: () => (
    <div className="d-flex flex-column gap-4">
      <div>
        <p className="text-muted mb-2">Indeterminate (use animated)</p>
        <Progress value={100} animated height={4} />
      </div>
      <div>
        <p className="text-muted mb-2">Pulsing effect with striped animation</p>
        <Progress value={100} variant="info" animated height={8} />
      </div>
      <div>
        <p className="text-muted mb-2">Multiple animated bars</p>
        <Progress>
          <ProgressBar value={33} variant="primary" animated />
          <ProgressBar value={33} variant="success" animated />
          <ProgressBar value={34} variant="warning" animated />
        </Progress>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Animated progress bars for loading/processing states.',
      },
    },
  },
};

export const SimpleProgressComponent: Story = {
  name: 'SimpleProgress Component',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <SimpleProgress value={25} />
      <SimpleProgress value={50} variant="success" showLabel />
      <SimpleProgress value={75} variant="warning" striped />
      <SimpleProgress value={90} variant="danger" animated height={24} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The SimpleProgress component provides a streamlined API for common use cases.',
      },
    },
  },
};

export const ZeroAndFull: Story = {
  name: 'Edge Cases (0% and 100%)',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div>
        <small className="text-muted">0%</small>
        <Progress value={0} showLabel height={20} />
      </div>
      <div>
        <small className="text-muted">1%</small>
        <Progress value={1} showLabel height={20} />
      </div>
      <div>
        <small className="text-muted">50%</small>
        <Progress value={50} showLabel height={20} />
      </div>
      <div>
        <small className="text-muted">99%</small>
        <Progress value={99} showLabel height={20} />
      </div>
      <div>
        <small className="text-muted">100%</small>
        <Progress value={100} variant="success" showLabel height={20} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progress bars at various percentages including edge cases.',
      },
    },
  },
};
