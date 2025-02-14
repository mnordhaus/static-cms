import type { Config, RelationField } from '../interface';

export interface RelationKitchenSinkPostField extends Omit<RelationField, 'widget'> {
  widget: 'relationKitchenSinkPost';
}

const testConfig: Config<RelationKitchenSinkPostField> = {
  backend: {
    name: 'test-repo',
  },
  site_url: 'https://example.com',
  media_folder: 'assets/uploads',
  locale: 'en',
  i18n: {
    structure: 'multiple_files',
    locales: ['en', 'de', 'fr'],
    defaultLocale: 'en',
  },
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      label_singular: 'Post',
      description:
        'The description is a great place for tone setting, high level information, and editing guidelines that are specific to a collection.',
      folder: '_posts',
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      summary_fields: ['title', 'date', 'draft'],
      sortable_fields: {
        fields: ['title', 'date'],
        default: {
          field: 'title',
        },
      },
      create: true,
      view_filters: [
        {
          label: 'Posts With Index',
          field: 'title',
          pattern: 'This is post #',
        },
        {
          label: 'Posts Without Index',
          field: 'title',
          pattern: 'front matter post',
        },
        {
          label: 'Drafts',
          field: 'draft',
          pattern: true,
        },
      ],
      view_groups: [
        {
          label: 'Year',
          field: 'date',
          pattern: '\\d{4}',
        },
        {
          label: 'Drafts',
          field: 'draft',
        },
      ],
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Draft',
          name: 'draft',
          widget: 'boolean',
          default: false,
        },
        {
          label: 'Publish Date',
          name: 'date',
          widget: 'datetime',
          date_format: 'yyyy-MM-dd',
          time_format: 'HH:mm',
          format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
        },
        {
          label: 'Cover Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
          hint: 'Main content goes here.',
        },
      ],
    },
    {
      name: 'faq',
      label: 'FAQ',
      folder: '_faqs',
      create: true,
      editor: {
        frame: false,
      },
      fields: [
        {
          label: 'Question',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Answer',
          name: 'body',
          widget: 'markdown',
        },
        {
          name: 'posts',
          label: 'Posts',
          label_singular: 'Post',
          widget: 'list',
          summary: "{{fields.post | split('|', '$1')}}",
          fields: [
            {
              label: 'Related Post',
              name: 'post',
              widget: 'relationKitchenSinkPost',
              collection: 'posts',
              display_fields: ['title', 'date'],
              search_fields: ['title', 'body'],
              value_field: '{{title}}|{{date}}',
            },
          ],
        },
      ],
    },
    {
      name: 'widgets',
      label: 'Widgets',
      delete: false,
      files: [
        {
          name: 'boolean',
          label: 'Boolean',
          file: '_widgets/boolean.json',
          description: 'Boolean widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'boolean',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'boolean',
              default: true,
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'boolean',
              pattern: ['true', 'Must be true'],
              required: false,
            },
          ],
        },
        {
          name: 'code',
          label: 'Code',
          file: '_widgets/code.json',
          description: 'Code widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'code',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'code',
              default: '<div>Some html!</div>',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'code',
              pattern: ['.{12,}', 'Must have at least 12 characters'],
              required: false,
            },
            {
              name: 'language',
              label: 'Language Selection',
              widget: 'code',
              allow_language_selection: true,
              required: false,
            },
            {
              name: 'language_with_default',
              label: 'Language Selection With Default Language',
              widget: 'code',
              allow_language_selection: true,
              required: false,
              default_language: 'html',
            },
            {
              name: 'language_with_default_language_and_value',
              label: 'Language Selection With Default Language and Value',
              widget: 'code',
              allow_language_selection: true,
              required: false,
              default: {
                lang: 'html',
                code: '<div>Some html!</div>',
              },
            },
            {
              name: 'language_with_default_language_and_value_string_default',
              label: 'Language Selection With Default Language and Value (String Default)',
              widget: 'code',
              allow_language_selection: true,
              required: false,
              default_language: 'html',
              default: '<div>Some html!</div>',
            },
          ],
        },
        {
          name: 'color',
          label: 'Color',
          file: '_widgets/color.json',
          description: 'Color widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'color',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'color',
              default: '#2121c5',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'color',
              pattern: ['^#([0-9a-fA-F]{3})(?:[0-9a-fA-F]{3})?$', 'Must be a valid hex code'],
              allow_input: true,
              required: false,
            },
            {
              name: 'alpha',
              label: 'Alpha',
              widget: 'color',
              enable_alpha: true,
              required: false,
            },
            {
              name: 'alpha_with_default',
              label: 'Alpha With Default',
              widget: 'color',
              enable_alpha: true,
              required: false,
              default: 'rgba(175, 28, 28, 0.65)',
            },
          ],
        },
        {
          name: 'datetime',
          label: 'DateTime',
          file: '_widgets/datetime.json',
          description: 'DateTime widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'datetime',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'datetime',
              format: 'MMM d, yyyy h:mm aaa',
              date_format: 'MMM d, yyyy',
              time_format: 'h:mm aaa',
              pattern: ['pm', 'Must be in the afternoon'],
              required: false,
            },
            {
              name: 'date_and_time',
              label: 'Date and Time',
              widget: 'datetime',
              format: 'MMM d, yyyy h:mm aaa',
              date_format: 'MMM d, yyyy',
              time_format: 'h:mm aaa',
              required: false,
            },
            {
              name: 'date_and_time_with_default',
              label: 'Date and Time With Default',
              widget: 'datetime',
              format: 'MMM d, yyyy h:mm aaa',
              date_format: 'MMM d, yyyy',
              time_format: 'h:mm aaa',
              required: false,
              default: 'Jan 12, 2023 12:00 am',
            },
            {
              name: 'date',
              label: 'Date',
              widget: 'datetime',
              format: 'MMM d, yyyy',
              time_format: false,
              required: false,
            },
            {
              name: 'date_with_default',
              label: 'Date With Default',
              widget: 'datetime',
              format: 'MMM d, yyyy',
              date_format: 'MMM d, yyyy',
              time_format: false,
              required: false,
              default: 'Jan 12, 2023',
            },
            {
              name: 'time',
              label: 'Time',
              widget: 'datetime',
              format: 'h:mm aaa',
              date_format: false,
              time_format: 'h:mm aaa',
              required: false,
            },
            {
              name: 'time_with_default',
              label: 'Time With Default',
              widget: 'datetime',
              format: 'h:mm aaa',
              date_format: false,
              time_format: 'h:mm aaa',
              required: false,
              default: '12:00 am',
            },
          ],
        },
        {
          name: 'file',
          label: 'File',
          file: '_widgets/file.json',
          description: 'File widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'file',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'file',
              default: '/assets/uploads/moby-dick.jpg',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'file',
              pattern: ['\\.pdf', 'Must be a pdf'],
              required: false,
            },
            {
              name: 'choose_url',
              label: 'Choose URL',
              widget: 'file',
              required: false,
              choose_url: true,
            },
          ],
        },
        {
          name: 'image',
          label: 'Image',
          file: '_widgets/image.json',
          description: 'Image widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'image',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'image',
              default: '/assets/uploads/moby-dick.jpg',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'image',
              pattern: ['\\.png', 'Must be a png'],
              required: false,
            },
            {
              name: 'choose_url',
              label: 'Choose URL',
              widget: 'image',
              required: false,
              choose_url: true,
            },
          ],
        },
        {
          name: 'list',
          label: 'List',
          file: '_widgets/list.yml',
          description: 'List widget',
          fields: [
            {
              name: 'list',
              label: 'Required List',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  hint: 'First and Last',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'list',
              default: [
                {
                  name: 'Bob Billy',
                  description: 'Some text about bob',
                },
              ],
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  hint: 'First and Last',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
            {
              name: 'optional',
              label: 'Optional List',
              widget: 'list',
              required: false,
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  hint: 'First and Last',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
            {
              name: 'string_list',
              label: 'String List',
              widget: 'list',
              fields: [
                {
                  label: 'Tag',
                  name: 'tag',
                  widget: 'string',
                },
              ],
            },
            {
              name: 'number_list',
              label: 'Number List',
              widget: 'list',
              default: [5, 13, 2],
              fields: [
                {
                  label: 'Value',
                  name: 'value',
                  widget: 'number',
                },
              ],
            },
            {
              name: 'boolean_list',
              label: 'Boolean List',
              widget: 'list',
              default: [false, true],
              fields: [
                {
                  label: 'Active',
                  name: 'active',
                  widget: 'boolean',
                },
              ],
            },
            {
              name: 'typed_list',
              label: 'Typed List',
              widget: 'list',
              types: [
                {
                  label: 'Type 1 Object',
                  name: 'type_1_object',
                  widget: 'object',
                  fields: [
                    {
                      label: 'String',
                      name: 'string',
                      widget: 'string',
                    },
                    {
                      label: 'Boolean',
                      name: 'boolean',
                      widget: 'boolean',
                    },
                    {
                      label: 'Text',
                      name: 'text',
                      widget: 'text',
                    },
                  ],
                },
                {
                  label: 'Type 2 Object',
                  name: 'type_2_object',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Number',
                      name: 'number',
                      widget: 'number',
                    },
                    {
                      label: 'Select',
                      name: 'select',
                      widget: 'select',
                      options: ['a', 'b', 'c'],
                    },
                    {
                      label: 'Datetime',
                      name: 'datetime',
                      widget: 'datetime',
                    },
                    {
                      label: 'Markdown',
                      name: 'markdown',
                      widget: 'markdown',
                    },
                  ],
                },
                {
                  label: 'Type 3 Object',
                  name: 'type_3_object',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                    {
                      label: 'File',
                      name: 'file',
                      widget: 'file',
                    },
                  ],
                },
              ],
            },
            {
              name: 'typed_list_with_default',
              label: 'Typed List With Default',
              widget: 'list',
              default: [
                {
                  type: 'type_2_object',
                  number: 5,
                  select: 'c',
                  datetime: '2022-12-05T20:22:52+0000',
                  markdown: 'Some ***Markdown*** ~content~ text',
                },
              ],
              types: [
                {
                  label: 'Type 1 Object',
                  name: 'type_1_object',
                  widget: 'object',
                  fields: [
                    {
                      label: 'String',
                      name: 'string',
                      widget: 'string',
                    },
                    {
                      label: 'Boolean',
                      name: 'boolean',
                      widget: 'boolean',
                    },
                    {
                      label: 'Text',
                      name: 'text',
                      widget: 'text',
                    },
                  ],
                },
                {
                  label: 'Type 2 Object',
                  name: 'type_2_object',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Number',
                      name: 'number',
                      widget: 'number',
                    },
                    {
                      label: 'Select',
                      name: 'select',
                      widget: 'select',
                      options: ['a', 'b', 'c'],
                    },
                    {
                      label: 'Datetime',
                      name: 'datetime',
                      widget: 'datetime',
                    },
                    {
                      label: 'Markdown',
                      name: 'markdown',
                      widget: 'markdown',
                    },
                  ],
                },
                {
                  label: 'Type 3 Object',
                  name: 'type_3_object',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                    {
                      label: 'File',
                      name: 'file',
                      widget: 'file',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'map',
          label: 'Map',
          file: '_widgets/map.json',
          description: 'Map widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'map',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'map',
              default: '{ "type": "Point", "coordinates": [-73.9852661, 40.7478738] }',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'map',
              pattern: ['\\[-([7-9][0-9]|1[0-2][0-9])\\.', 'Must be between latitude -70 and -129'],
              required: false,
            },
          ],
        },
        {
          name: 'markdown',
          label: 'Markdown',
          file: '_widgets/markdown.json',
          description: 'Markdown widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'markdown',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'markdown',
              default: 'Default **markdown** value',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'markdown',
              pattern: ['# [a-zA-Z0-9]+', 'Must have a header'],
              required: false,
            },
          ],
        },
        {
          name: 'number',
          label: 'Number',
          file: '_widgets/number.json',
          description: 'Number widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'number',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'number',
              default: 5,
            },
            {
              name: 'min',
              label: 'Min Validation',
              widget: 'number',
              min: 5,
              required: false,
            },
            {
              name: 'max',
              label: 'Max Validation',
              widget: 'number',
              max: 10,
              required: false,
            },
            {
              name: 'min_and_max',
              label: 'Min and Max Validation',
              widget: 'number',
              min: 5,
              max: 10,
              required: false,
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'number',
              pattern: ['[0-9]{3,}', 'Must be at least 3 digits'],
              required: false,
            },
          ],
        },
        {
          name: 'object',
          label: 'Object',
          file: '_widgets/object.json',
          description: 'Object widget',
          fields: [
            {
              label: 'Required Validation',
              name: 'required',
              widget: 'object',
              fields: [
                {
                  label: 'Number of posts on frontpage',
                  name: 'front_limit',
                  widget: 'number',
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                },
                {
                  label: 'Thumbnail',
                  name: 'thumb',
                  widget: 'image',
                },
              ],
            },
            {
              label: 'Required With Defaults',
              name: 'with_defaults',
              widget: 'object',
              fields: [
                {
                  label: 'Number of posts on frontpage',
                  name: 'front_limit',
                  widget: 'number',
                  default: 5,
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                  default: 'Bob',
                },
                {
                  label: 'Thumbnail',
                  name: 'thumb',
                  widget: 'image',
                  default: '/assets/uploads/moby-dick.jpg',
                },
              ],
            },
            {
              label: 'Optional Validation',
              name: 'optional',
              widget: 'object',
              required: false,
              fields: [
                {
                  label: 'Number of posts on frontpage',
                  name: 'front_limit',
                  widget: 'number',
                  required: false,
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Thumbnail',
                  name: 'thumb',
                  widget: 'image',
                  required: false,
                },
              ],
            },
            {
              label: 'With Hidden Field',
              name: 'hidden_field',
              widget: 'object',
              required: false,
              fields: [
                {
                  name: 'layout',
                  widget: 'hidden',
                  default: 'post',
                },
                {
                  label: 'Number of posts on frontpage',
                  name: 'front_limit',
                  widget: 'number',
                  required: false,
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                  required: false,
                },
                {
                  label: 'Thumbnail',
                  name: 'thumb',
                  widget: 'image',
                  required: false,
                },
              ],
            },
            {
              label: 'Collapsed, optional with required children',
              name: 'collapsed_optional_with_required_children',
              widget: 'object',
              required: false,
              collapsed: true,
              fields: [
                {
                  name: 'layout',
                  widget: 'hidden',
                  default: 'post',
                },
                {
                  label: 'Number of posts on frontpage',
                  name: 'front_limit',
                  widget: 'number',
                  required: true,
                },
                {
                  label: 'Author',
                  name: 'author',
                  widget: 'string',
                  required: true,
                },
                {
                  label: 'Thumbnail',
                  name: 'thumb',
                  widget: 'image',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'relation',
          label: 'Relation',
          file: '_widgets/relation.json',
          description: 'Relation widget',
          fields: [
            {
              label: 'Required Validation',
              name: 'required',
              widget: 'relation',
              collection: 'posts',
              display_fields: ['title', 'date'],
              search_fields: ['title', 'date'],
              value_field: 'title',
            },
            {
              label: 'Required With Default',
              name: 'with_default',
              widget: 'relation',
              collection: 'posts',
              display_fields: ['title', 'date'],
              search_fields: ['title', 'date'],
              value_field: 'title',
              default: 'This is a YAML front matter post',
            },
            {
              label: 'Optional Validation',
              name: 'optional',
              widget: 'relation',
              required: false,
              collection: 'posts',
              display_fields: ['title', 'date'],
              search_fields: ['title', 'date'],
              value_field: 'title',
            },
            {
              label: 'Multiple',
              name: 'multiple',
              widget: 'relation',
              multiple: true,
              required: false,
              collection: 'posts',
              display_fields: ['title', 'date'],
              search_fields: ['title', 'date'],
              value_field: 'title',
            },
            {
              label: 'Multiple With Default',
              name: 'multiple_with_default',
              widget: 'relation',
              multiple: true,
              required: false,
              collection: 'posts',
              default: ['This is a JSON front matter post', 'This is a YAML front matter post'],
              display_fields: ['title', 'date'],
              search_fields: ['title', 'date'],
              value_field: 'title',
            },
          ],
        },
        {
          name: 'select',
          label: 'Select',
          file: '_widgets/select.json',
          description: 'Select widget',
          fields: [
            {
              label: 'Required Validation',
              name: 'required',
              widget: 'select',
              options: ['a', 'b', 'c'],
            },
            {
              label: 'Required With Default',
              name: 'with_default',
              widget: 'select',
              default: 'b',
              options: ['a', 'b', 'c'],
            },
            {
              label: 'Pattern Validation',
              name: 'pattern',
              widget: 'select',
              options: ['a', 'b', 'c'],
              pattern: ['[a-b]', 'Must be a or b'],
              required: false,
            },
            {
              label: 'Number Value',
              name: 'number',
              widget: 'select',
              options: [1, 2, 3],
            },
            {
              label: 'Number With Default',
              name: 'number_with_default',
              widget: 'select',
              default: 3,
              options: [1, 2, 3],
            },
            {
              label: 'Value and Label',
              name: 'value_and_label',
              widget: 'select',
              options: [
                {
                  value: 'a',
                  label: 'A fancy label',
                },
                {
                  value: 2,
                  label: 'Another fancy label',
                },
                {
                  value: 'c',
                  label: 'And one more fancy label',
                },
              ],
            },
            {
              label: 'Value and Label With Default',
              name: 'value_and_label_with_default',
              widget: 'select',
              default: 2,
              options: [
                {
                  value: 'a',
                  label: 'A fancy label',
                },
                {
                  value: 2,
                  label: 'Another fancy label',
                },
                {
                  value: 'c',
                  label: 'And one more fancy label',
                },
              ],
            },
            {
              label: 'Multiple',
              name: 'multiple',
              widget: 'select',
              options: ['a', 'b', 'c'],
              pattern: ['[a-b]', 'Must be a or b'],
              multiple: true,
              required: false,
            },
            {
              label: 'Multiple With Default',
              name: 'multiple_with_default',
              widget: 'select',
              default: ['b', 'c'],
              options: ['a', 'b', 'c'],
              pattern: ['[a-b]', 'Must be a or b'],
              multiple: true,
              required: false,
            },
            {
              label: 'Value and Label Multiple',
              name: 'value_and_label_multiple',
              widget: 'select',
              multiple: true,
              options: [
                {
                  value: 'a',
                  label: 'A fancy label',
                },
                {
                  value: 'b',
                  label: 'Another fancy label',
                },
                {
                  value: 'c',
                  label: 'And one more fancy label',
                },
              ],
            },
          ],
        },
        {
          name: 'string',
          label: 'String',
          file: '_widgets/string.json',
          description: 'String widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'string',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'string',
              default: 'Default value',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'string',
              pattern: ['.{12,}', 'Must have at least 12 characters'],
              required: false,
            },
          ],
        },
        {
          name: 'text',
          label: 'Text',
          file: '_widgets/text.json',
          description: 'Text widget',
          fields: [
            {
              name: 'required',
              label: 'Required Validation',
              widget: 'text',
            },
            {
              name: 'with_default',
              label: 'Required With Default',
              widget: 'text',
              default: 'Default value',
            },
            {
              name: 'pattern',
              label: 'Pattern Validation',
              widget: 'text',
              pattern: ['.{12,}', 'Must have at least 12 characters'],
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: 'settings',
      label: 'Settings',
      delete: false,
      editor: {
        preview: false,
      },
      files: [
        {
          name: 'general',
          label: 'Site Settings',
          file: '_data/settings.json',
          description: 'General Site Settings',
          editor: {
            preview: true,
          },
          fields: [
            {
              label: 'Number of posts on frontpage',
              name: 'front_limit',
              widget: 'number',
              min: 1,
              max: 10,
            },
            {
              label: 'Global title',
              name: 'site_title',
              widget: 'string',
            },
            {
              label: 'Post Settings',
              name: 'posts',
              widget: 'object',
              fields: [
                {
                  label: 'Number of posts on frontpage',
                  name: 'front_limit',
                  widget: 'number',
                  min: 1,
                  max: 10,
                },
                {
                  label: 'Default Author',
                  name: 'author',
                  widget: 'string',
                },
                {
                  label: 'Default Thumbnail',
                  name: 'thumb',
                  widget: 'image',
                  required: false,
                },
              ],
            },
          ],
        },
        {
          name: 'authors',
          label: 'Authors',
          file: '_data/authors.yml',
          description: 'Author descriptions',
          editor: {
            preview: true,
          },
          fields: [
            {
              name: 'authors',
              label: 'Authors',
              label_singular: 'Author',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                  hint: 'First and Last',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'kitchenSink',
      label: 'Kitchen Sink',
      folder: '_sink',
      create: true,
      fields: [
        {
          label: 'Related Post',
          name: 'post',
          widget: 'relationKitchenSinkPost',
          collection: 'posts',
          display_fields: ['title', 'date'],
          search_fields: ['title', 'body'],
          value_field: 'title',
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Boolean',
          name: 'boolean',
          widget: 'boolean',
          default: true,
        },
        {
          label: 'Map',
          name: 'map',
          widget: 'map',
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
          hint: 'Plain text, not markdown',
        },
        {
          label: 'Number',
          name: 'number',
          widget: 'number',
          hint: 'To infinity and beyond!',
        },
        {
          label: 'Markdown',
          name: 'markdown',
          widget: 'markdown',
        },
        {
          label: 'Datetime',
          name: 'datetime',
          widget: 'datetime',
        },
        {
          label: 'Color',
          name: 'color',
          widget: 'color',
        },
        {
          label: 'Color string editable and alpha enabled',
          name: 'colorEditable',
          widget: 'color',
          enable_alpha: true,
          allow_input: true,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'File',
          name: 'file',
          widget: 'file',
        },
        {
          label: 'Select',
          name: 'select',
          widget: 'select',
          options: ['a', 'b', 'c'],
        },
        {
          label: 'Select multiple',
          name: 'select_multiple',
          widget: 'select',
          options: ['a', 'b', 'c'],
          multiple: true,
        },
        {
          label: 'Select numeric',
          name: 'select_numeric',
          widget: 'select',
          options: [
            {
              label: 'One',
              value: 1,
            },
            {
              label: 'Two',
              value: 2,
            },
            {
              label: 'Three',
              value: 3,
            },
          ],
        },
        {
          label: 'Select mixed string and numeric',
          name: 'select_mixed_string_numeric',
          widget: 'select',
          options: [
            {
              label: 'One',
              value: 'One',
            },
            {
              label: 'Two',
              value: 2,
            },
            {
              label: 'Three',
              value: 3,
            },
          ],
        },
        {
          label: 'Hidden',
          name: 'hidden',
          widget: 'hidden',
          default: 'hidden',
        },
        {
          label: 'Object',
          name: 'object',
          widget: 'object',
          collapsed: true,
          fields: [
            {
              label: 'Related Post',
              name: 'post',
              widget: 'relationKitchenSinkPost',
              collection: 'posts',
              search_fields: ['title', 'body'],
              value_field: 'title',
            },
            {
              label: 'String',
              name: 'string',
              widget: 'string',
            },
            {
              label: 'Boolean',
              name: 'boolean',
              widget: 'boolean',
              default: false,
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'text',
            },
            {
              label: 'Number',
              name: 'number',
              widget: 'number',
            },
            {
              label: 'Markdown',
              name: 'markdown',
              widget: 'markdown',
            },
            {
              label: 'Datetime',
              name: 'datetime',
              widget: 'datetime',
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
            },
            {
              label: 'File',
              name: 'file',
              widget: 'file',
            },
            {
              label: 'Select',
              name: 'select',
              widget: 'select',
              options: ['a', 'b', 'c'],
            },
          ],
        },
        {
          label: 'List',
          name: 'list',
          widget: 'list',
          fields: [
            {
              label: 'String',
              name: 'string',
              widget: 'string',
            },
            {
              label: 'Boolean',
              name: 'boolean',
              widget: 'boolean',
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'text',
            },
            {
              label: 'Number',
              name: 'number',
              widget: 'number',
            },
            {
              label: 'Markdown',
              name: 'markdown',
              widget: 'markdown',
            },
            {
              label: 'Datetime',
              name: 'datetime',
              widget: 'datetime',
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
            },
            {
              label: 'File',
              name: 'file',
              widget: 'file',
            },
            {
              label: 'Select',
              name: 'select',
              widget: 'select',
              options: ['a', 'b', 'c'],
            },
            {
              label: 'Object',
              name: 'object',
              widget: 'object',
              fields: [
                {
                  label: 'String',
                  name: 'string',
                  widget: 'string',
                },
                {
                  label: 'Boolean',
                  name: 'boolean',
                  widget: 'boolean',
                },
                {
                  label: 'Text',
                  name: 'text',
                  widget: 'text',
                },
                {
                  label: 'Number',
                  name: 'number',
                  widget: 'number',
                },
                {
                  label: 'Markdown',
                  name: 'markdown',
                  widget: 'markdown',
                },
                {
                  label: 'Datetime',
                  name: 'datetime',
                  widget: 'datetime',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: 'File',
                  name: 'file',
                  widget: 'file',
                },
                {
                  label: 'Select',
                  name: 'select',
                  widget: 'select',
                  options: ['a', 'b', 'c'],
                },
                {
                  label: 'List',
                  name: 'list',
                  widget: 'list',
                  fields: [
                    {
                      label: 'Related Post',
                      name: 'post',
                      widget: 'relationKitchenSinkPost',
                      collection: 'posts',
                      search_fields: ['title', 'body'],
                      value_field: 'title',
                    },
                    {
                      label: 'String',
                      name: 'string',
                      widget: 'string',
                    },
                    {
                      label: 'Boolean',
                      name: 'boolean',
                      widget: 'boolean',
                    },
                    {
                      label: 'Text',
                      name: 'text',
                      widget: 'text',
                    },
                    {
                      label: 'Number',
                      name: 'number',
                      widget: 'number',
                    },
                    {
                      label: 'Markdown',
                      name: 'markdown',
                      widget: 'markdown',
                    },
                    {
                      label: 'Datetime',
                      name: 'datetime',
                      widget: 'datetime',
                    },
                    {
                      label: 'Image',
                      name: 'image',
                      widget: 'image',
                    },
                    {
                      label: 'File',
                      name: 'file',
                      widget: 'file',
                    },
                    {
                      label: 'Select',
                      name: 'select',
                      widget: 'select',
                      options: ['a', 'b', 'c'],
                    },
                    {
                      label: 'Hidden',
                      name: 'hidden',
                      widget: 'hidden',
                      default: 'hidden',
                    },
                    {
                      label: 'Object',
                      name: 'object',
                      widget: 'object',
                      fields: [
                        {
                          label: 'String',
                          name: 'string',
                          widget: 'string',
                        },
                        {
                          label: 'Boolean',
                          name: 'boolean',
                          widget: 'boolean',
                        },
                        {
                          label: 'Text',
                          name: 'text',
                          widget: 'text',
                        },
                        {
                          label: 'Number',
                          name: 'number',
                          widget: 'number',
                        },
                        {
                          label: 'Markdown',
                          name: 'markdown',
                          widget: 'markdown',
                        },
                        {
                          label: 'Datetime',
                          name: 'datetime',
                          widget: 'datetime',
                        },
                        {
                          label: 'Image',
                          name: 'image',
                          widget: 'image',
                        },
                        {
                          label: 'File',
                          name: 'file',
                          widget: 'file',
                        },
                        {
                          label: 'Select',
                          name: 'select',
                          widget: 'select',
                          options: ['a', 'b', 'c'],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Typed List',
          name: 'typed_list',
          widget: 'list',
          types: [
            {
              label: 'Type 1 Object',
              name: 'type_1_object',
              widget: 'object',
              fields: [
                {
                  label: 'String',
                  name: 'string',
                  widget: 'string',
                },
                {
                  label: 'Boolean',
                  name: 'boolean',
                  widget: 'boolean',
                },
                {
                  label: 'Text',
                  name: 'text',
                  widget: 'text',
                },
              ],
            },
            {
              label: 'Type 2 Object',
              name: 'type_2_object',
              widget: 'object',
              fields: [
                {
                  label: 'Number',
                  name: 'number',
                  widget: 'number',
                },
                {
                  label: 'Select',
                  name: 'select',
                  widget: 'select',
                  options: ['a', 'b', 'c'],
                },
                {
                  label: 'Datetime',
                  name: 'datetime',
                  widget: 'datetime',
                },
                {
                  label: 'Markdown',
                  name: 'markdown',
                  widget: 'markdown',
                },
              ],
            },
            {
              label: 'Type 3 Object',
              name: 'type_3_object',
              widget: 'object',
              fields: [
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
                {
                  label: 'File',
                  name: 'file',
                  widget: 'file',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'i18n_playground',
      label: 'i18n Playground',
      i18n: true,
      folder: '_i18n_playground',
      identifier_field: 'slug',
      create: true,
      fields: [
        {
          name: 'slug',
          label: 'Slug',
          widget: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'text',
          i18n: true,
        },
        {
          name: 'date',
          label: 'Date',
          widget: 'datetime',
          i18n: 'duplicate',
        },
      ],
    },
    {
      name: 'pages',
      label: 'Nested Pages',
      label_singular: 'Page',
      folder: '_nested_pages',
      create: true,
      nested: {
        depth: 100,
        summary: '{{title}}',
        path: {
          label: 'Path',
          index_file: 'index',
        },
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      name: 'i18n_playground_multiple_folders',
      label: 'i18n (Multiple Folders)',
      i18n: {
        structure: 'multiple_folders',
        locales: ['en', 'de', 'fr'],
        defaultLocale: 'en',
      },
      folder: 'packages/core/dev-test/backends/proxy/_i18n_playground_multiple_folders',
      identifier_field: 'slug',
      create: true,
      fields: [
        {
          name: 'slug',
          label: 'Slug',
          widget: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'text',
          i18n: true,
        },
        {
          name: 'date',
          label: 'Date',
          widget: 'datetime',
          i18n: 'duplicate',
        },
      ],
    },
    {
      name: 'i18n_playground_single_file',
      label: 'i18n (Single File)',
      i18n: {
        structure: 'single_file',
        locales: ['en', 'de', 'fr'],
        defaultLocale: 'en',
      },
      folder: 'packages/core/dev-test/backends/proxy/_i18n_playground_single_file',
      identifier_field: 'slug',
      create: true,
      fields: [
        {
          name: 'slug',
          label: 'Slug',
          widget: 'string',
        },
        {
          name: 'description',
          label: 'Description',
          widget: 'text',
          i18n: true,
        },
      ],
    },
  ],
};

export default testConfig;
