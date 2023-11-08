import { access } from "fs";
import Stripe from "stripe";
import { User } from "@supabase/auth-helpers-nextjs";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export interface SidebarProps {
  children?: React.ReactNode;
  songs: SongProps[];
}

export interface HeaderProps {
  className?: string
  children: React.ReactNode;
}

export interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

export interface SuperbaseProviderProps {
  children: React.ReactNode;
}

export interface UserInfo {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?: string;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Price {
  id: string;
  product_id?: string;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?: Stripe.Metadata;
  product?: Product;
}

export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface Subscriprion {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string;
  quantity?: number;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}

export interface UserContextProps {
  accessToken: string | null;
  user: User | null;
  userDetails: UserInfo | null;
  isLoading: boolean;
  subscription: Subscriprion | null;
}

export interface ModalWindowProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export interface AuthModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface UploadModalProps extends AuthModalProps { };
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { };
export interface LibraryProps extends SidebarProps { }
export interface SearchContentProps extends SidebarProps { }

export interface SongProps {
  id: string;
  user_id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
}

export interface PageContentProps {
  songs: SongProps[];
}

export interface LikedContentProps extends PageContentProps { }

export interface SongItemProps {
  data: SongProps;
  onClick: (id: string) => void;
}

export interface MediaItemProps {
  data: SongProps;
  onClick?: (id: string) => void;
}

export interface SearchProps {
  searchParams: {
    title: string;
  }
}

export interface LikeButtonProps {
  songId: string;
}

export interface FetchDataProps {
  userId: number, 
  songId: number
}

export interface PlayerStoreProps {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

export interface PlayerContentProps {
  song: SongProps;
  songUrl: string;
}
