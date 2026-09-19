# Course State Flow

```mermaid
flowchart TD
    A[Layout mounts] --> B[useCourse]
    A --> C[useStat]

    B --> D{Read localStorage savedCourse}
    D -->|Missing or invalid| E[savedCourse = []]
    D -->|Valid JSON| F[savedCourse = stored course array]

    C --> G{Read localStorage currentWatch}
    G -->|Missing or invalid| H[currentWatch = []]
    G -->|Valid JSON| I[currentWatch = stored selected-course array]

    E --> J[Course page]
    F --> J
    H --> J
    I --> J

    J --> K[CourseLibrary renders savedCourse]
    J --> L[CourseStat renders currentWatch]

    M[Add course form submitted] --> N[Create newCourse]
    N --> O[setSavedCourse previous => newCourse + previous]
    O --> P[useEffect saves savedCourse to localStorage]
    P --> K

    K --> Q[Click Open Course]
    Q --> R[selectedCourse = [course]]
    R --> S[setCurrentWatch selectedCourse]
    R --> T[handleCurrentWatch selectedCourse]
    S --> U[useEffect saves currentWatch to localStorage]
    T --> V[Log selectedCourse]
    R --> W[Navigate to /player/:url]

    W --> X[VideoPlayer renders]
    X --> Y[Course page unmounts]
    Y --> Z[CourseLibrary is no longer visible]
    X --> AA[Back to courses]
    AA --> J

    classDef storage fill:#fff3cd,stroke:#b58105,color:#3d2f00
    classDef state fill:#dbeafe,stroke:#2563eb,color:#172554
    classDef route fill:#dcfce7,stroke:#16a34a,color:#14532d

    class D,G,P,U storage
    class E,F,H,I,O,S state
    class W,X,Y,AA route
```

## State Meaning

- `savedCourse: InputType[]` is the complete course library. It is stored under `savedCourse` in `localStorage`.
- `currentWatch: InputType[] | undefined` stores the selected course as a one-item array: `[course]`. It is stored under `currentWatch` in `localStorage`.
- Opening a course does not delete `savedCourse`; navigating to `/player/:url` simply unmounts the `Course` page, so the library is temporarily not rendered.
- The **Back to courses** action navigates back to `/course`, where `savedCourse` is loaded again from `localStorage`.
