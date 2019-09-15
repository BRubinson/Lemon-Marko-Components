# Lemon Component Library
This is a UI Components library similar to material-ui/bootstrap for Markojs

# [Demo-Page](https://brubinson.github.io/Lemon-Marko-Components/)

## Install

TODO

## Starting a local demo page

```bash
npm start
```

## Features/Components

### Grid 
A basic flexbox grid

TODO 
- Breakpoints
- Direction
- Column sizes

```
Grid
    @Row
        @Col
            p -- text
        @Col
            p -- another column
    @Row
        @Col
            p -- another row
```

### Alert

Eye catching text blocks with variants

```
Alert variant='primary'
    h2 -- Demo Alert
    p -- Some text here 
        a -- and a link
```

### Icon

Material UI Icon wrapper component

```
Icon name='calendar'
```

### Button

A Button

TODO:
- Icon Alignment

```
Button variant='primary' outline -- Primary
Button variant='success' -- Success
    @Icon name='check_circle'
```

### ButtonGroup

Groups buttons together as a single toolbar

TODO:
- props passing down to buttons

```
ButtonGroup fullWidth
    Button variant='default'  size='md'    -- Default
    Button variant='default'  size='md' -- Default
    Button variant='default'  size='md'  -- Default
```

### Dropdown

A controlledd Dropdown component with customizable triggers

TODO:
- custom triggers
- menu a11y

```
Dropdown on-item-click('handleItemClick') show variant='primary' -- Open
    @Item
        -- one
```

### DropdownButton

A Statefull dropdown with a button trigger

```
DropdownButton on-item-click('handleItemClick') variant='primary' -- Click Me
    @Item
        -- one
    @Item
        -- two
```

### SplitButton

A Button combined with a DropdownButton appended at the end

```
SplitButton on-item-click('handleItemClick') variant='primary' -- Click Me
    @Item
        -- One
    @Item
        -- Two
    @Item
        -- Three
```

### TextField *WIP*

Text input field

```
TextField label='Success input' variant='success' placeholder='Success input' type='text'
```
### Checkbox *WIP* 

Checkbox input

```
Checkbox id='shrek' label='Success input' variant='primary' 
```
