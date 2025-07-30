export interface SearchResult {
  id: string;
  type: 'mail' | 'document' | 'contact' | 'calendar' | 'board';
  title: string;
  content: string;
  author?: string;
  date?: string;
  department?: string;
  tags?: string[];
  url?: string;
  relevance: number;
}
export interface SearchFilter {
  type?: SearchResult['type'][];
  dateRange?: {
    start: Date;
    end: Date;
  };
  department?: string[];
  author?: string[];
}

/**
 * 검색 상태의 인터페이스 정의
 */
export interface SearchState {
  query: string;
  results: SearchResult[];
  filters: SearchFilter;
  isLoading: boolean;
  hasSearched: boolean;
  totalResults: number;
  suggestions: string[];
}

/**
 * 검색 컴포넌트의 Props 인터페이스 정의
 */
export interface SearchProps {
  onSearch: (query: string, filters?: SearchFilter) => void;
  onClear: () => void;
  placeholder?: string;
  showFilters?: boolean;
  // 검색 상태를 Search 컴포넌트 내부에서 관리할 수도 있지만,
  // 필요에 따라 외부에서 주입받아 사용할 수도 있도록 SearchState도 추가
  searchState?: SearchState;
}


