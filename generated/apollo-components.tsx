export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
  Long: any;
};

export type AggregateAsset = {
   __typename?: 'AggregateAsset';
  count: Scalars['Int'];
};

export type AggregateRecipe = {
   __typename?: 'AggregateRecipe';
  count: Scalars['Int'];
};

export type AggregateUserLike = {
   __typename?: 'AggregateUserLike';
  count: Scalars['Int'];
};

export type Asset = Node & {
   __typename?: 'Asset';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imagesRecipe?: Maybe<Array<Recipe>>;
  url: Scalars['String'];
};


export type AssetImagesRecipeArgs = {
  where?: Maybe<RecipeWhereInput>;
  orderBy?: Maybe<RecipeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnection = {
   __typename?: 'AssetConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AssetEdge>>;
  aggregate: AggregateAsset;
};

export type AssetCreateInput = {
  status?: Maybe<Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imagesRecipe?: Maybe<RecipeCreateManyWithoutImagesInput>;
};

export type AssetCreateOneWithoutImagesRecipeInput = {
  upload?: Maybe<AssetUploadWithoutImagesRecipeInput>;
  create?: Maybe<AssetCreateWithoutImagesRecipeInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
};

export type AssetCreateWithoutImagesRecipeInput = {
  status?: Maybe<Status>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetEdge = {
   __typename?: 'AssetEdge';
  node: Asset;
  cursor: Scalars['String'];
};

export enum AssetOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type AssetPreviousValues = {
   __typename?: 'AssetPreviousValues';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetSubscriptionPayload = {
   __typename?: 'AssetSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Asset>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<AssetPreviousValues>;
};

export type AssetSubscriptionWhereInput = {
  AND?: Maybe<Array<AssetSubscriptionWhereInput>>;
  OR?: Maybe<Array<AssetSubscriptionWhereInput>>;
  NOT?: Maybe<Array<AssetSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<AssetWhereInput>;
};

export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  imagesRecipe?: Maybe<RecipeUpdateManyWithoutImagesInput>;
};

export type AssetUpdateManyMutationInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateOneWithoutImagesRecipeInput = {
  create?: Maybe<AssetCreateWithoutImagesRecipeInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AssetUpdateWithoutImagesRecipeDataInput>;
  upsert?: Maybe<AssetUpsertWithoutImagesRecipeInput>;
};

export type AssetUpdateWithoutImagesRecipeDataInput = {
  status?: Maybe<Status>;
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUploadInput = {
  url: Scalars['String'];
  status?: Maybe<Status>;
  imagesRecipe?: Maybe<RecipeCreateManyWithoutImagesInput>;
};

export type AssetUploadWithoutImagesRecipeInput = {
  url: Scalars['String'];
  status?: Maybe<Status>;
};

export type AssetUpsertWithoutImagesRecipeInput = {
  update: AssetUpdateWithoutImagesRecipeDataInput;
  create: AssetCreateWithoutImagesRecipeInput;
};

export type AssetWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<AssetWhereInput>>;
  OR?: Maybe<Array<AssetWhereInput>>;
  NOT?: Maybe<Array<AssetWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
  handle_not?: Maybe<Scalars['String']>;
  handle_in?: Maybe<Array<Scalars['String']>>;
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  handle_lt?: Maybe<Scalars['String']>;
  handle_lte?: Maybe<Scalars['String']>;
  handle_gt?: Maybe<Scalars['String']>;
  handle_gte?: Maybe<Scalars['String']>;
  handle_contains?: Maybe<Scalars['String']>;
  handle_not_contains?: Maybe<Scalars['String']>;
  handle_starts_with?: Maybe<Scalars['String']>;
  handle_not_starts_with?: Maybe<Scalars['String']>;
  handle_ends_with?: Maybe<Scalars['String']>;
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Scalars['String']>>;
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  fileName_lt?: Maybe<Scalars['String']>;
  fileName_lte?: Maybe<Scalars['String']>;
  fileName_gt?: Maybe<Scalars['String']>;
  fileName_gte?: Maybe<Scalars['String']>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_starts_with?: Maybe<Scalars['String']>;
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  fileName_ends_with?: Maybe<Scalars['String']>;
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  height_not?: Maybe<Scalars['Float']>;
  height_in?: Maybe<Array<Scalars['Float']>>;
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  height_lt?: Maybe<Scalars['Float']>;
  height_lte?: Maybe<Scalars['Float']>;
  height_gt?: Maybe<Scalars['Float']>;
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  width_not?: Maybe<Scalars['Float']>;
  width_in?: Maybe<Array<Scalars['Float']>>;
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  width_lt?: Maybe<Scalars['Float']>;
  width_lte?: Maybe<Scalars['Float']>;
  width_gt?: Maybe<Scalars['Float']>;
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  size_not?: Maybe<Scalars['Float']>;
  size_in?: Maybe<Array<Scalars['Float']>>;
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  size_lt?: Maybe<Scalars['Float']>;
  size_lte?: Maybe<Scalars['Float']>;
  size_gt?: Maybe<Scalars['Float']>;
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  mimeType_not?: Maybe<Scalars['String']>;
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  mimeType_lt?: Maybe<Scalars['String']>;
  mimeType_lte?: Maybe<Scalars['String']>;
  mimeType_gt?: Maybe<Scalars['String']>;
  mimeType_gte?: Maybe<Scalars['String']>;
  mimeType_contains?: Maybe<Scalars['String']>;
  mimeType_not_contains?: Maybe<Scalars['String']>;
  mimeType_starts_with?: Maybe<Scalars['String']>;
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  mimeType_ends_with?: Maybe<Scalars['String']>;
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  imagesRecipe_every?: Maybe<RecipeWhereInput>;
  imagesRecipe_some?: Maybe<RecipeWhereInput>;
  imagesRecipe_none?: Maybe<RecipeWhereInput>;
};

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  handle?: Maybe<Scalars['String']>;
};

export type BatchPayload = {
   __typename?: 'BatchPayload';
  count: Scalars['Long'];
};


export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Html = 'html',
  Pdf = 'pdf',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  format?: Maybe<DocumentFileTypes>;
};

export type DocumentTransformationInput = {
  output?: Maybe<DocumentOutputInput>;
};

export enum ImageFit {
  Clip = 'clip',
  Crop = 'crop',
  Scale = 'scale',
  Max = 'max'
}

export type ImageResizeInput = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  fit?: Maybe<ImageFit>;
};

export type ImageTransformationInput = {
  resize?: Maybe<ImageResizeInput>;
};


export enum Locale {
  En = 'EN'
}


export type Mutation = {
   __typename?: 'Mutation';
  createAsset: Asset;
  uploadAsset: Asset;
  createRecipe: Recipe;
  createUserLike: UserLike;
  updateAsset?: Maybe<Asset>;
  updateRecipe?: Maybe<Recipe>;
  updateUserLike?: Maybe<UserLike>;
  deleteAsset?: Maybe<Asset>;
  deleteRecipe?: Maybe<Recipe>;
  deleteUserLike?: Maybe<UserLike>;
  upsertAsset: Asset;
  upsertRecipe: Recipe;
  upsertUserLike: UserLike;
  updateManyAssets: BatchPayload;
  updateManyRecipes: BatchPayload;
  updateManyUserLikes: BatchPayload;
  deleteManyAssets: BatchPayload;
  deleteManyRecipes: BatchPayload;
  deleteManyUserLikes: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUploadAssetArgs = {
  data: AssetUploadInput;
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateUserLikeArgs = {
  data: UserLikeCreateInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateUserLikeArgs = {
  data: UserLikeUpdateInput;
  where: UserLikeWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationDeleteUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  create: AssetCreateInput;
  update: AssetUpdateInput;
};


export type MutationUpsertRecipeArgs = {
  where: RecipeWhereUniqueInput;
  create: RecipeCreateInput;
  update: RecipeUpdateInput;
};


export type MutationUpsertUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  create: UserLikeCreateInput;
  update: UserLikeUpdateInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyMutationInput;
  where?: Maybe<AssetWhereInput>;
};


export type MutationUpdateManyRecipesArgs = {
  data: RecipeUpdateManyMutationInput;
  where?: Maybe<RecipeWhereInput>;
};


export type MutationUpdateManyUserLikesArgs = {
  data: UserLikeUpdateManyMutationInput;
  where?: Maybe<UserLikeWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
};


export type MutationDeleteManyRecipesArgs = {
  where?: Maybe<RecipeWhereInput>;
};


export type MutationDeleteManyUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  assets: Array<Maybe<Asset>>;
  recipes: Array<Maybe<Recipe>>;
  userLikes: Array<Maybe<UserLike>>;
  asset?: Maybe<Asset>;
  recipe?: Maybe<Recipe>;
  userLike?: Maybe<UserLike>;
  assetsConnection: AssetConnection;
  recipesConnection: RecipeConnection;
  userLikesConnection: UserLikeConnection;
  node?: Maybe<Node>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRecipesArgs = {
  where?: Maybe<RecipeWhereInput>;
  orderBy?: Maybe<RecipeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRecipesConnectionArgs = {
  where?: Maybe<RecipeWhereInput>;
  orderBy?: Maybe<RecipeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserLikesConnectionArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Recipe = Node & {
   __typename?: 'Recipe';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  images?: Maybe<Asset>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  userLikes?: Maybe<Array<UserLike>>;
};


export type RecipeUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RecipeConnection = {
   __typename?: 'RecipeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<RecipeEdge>>;
  aggregate: AggregateRecipe;
};

export type RecipeCreateInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  images?: Maybe<AssetCreateOneWithoutImagesRecipeInput>;
  userLikes?: Maybe<UserLikeCreateManyWithoutRecipeInput>;
};

export type RecipeCreateManyWithoutImagesInput = {
  create?: Maybe<Array<RecipeCreateWithoutImagesInput>>;
  connect?: Maybe<Array<RecipeWhereUniqueInput>>;
};

export type RecipeCreateOneWithoutUserLikesInput = {
  create?: Maybe<RecipeCreateWithoutUserLikesInput>;
  connect?: Maybe<RecipeWhereUniqueInput>;
};

export type RecipeCreateWithoutImagesInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLikeCreateManyWithoutRecipeInput>;
};

export type RecipeCreateWithoutUserLikesInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  images?: Maybe<AssetCreateOneWithoutImagesRecipeInput>;
};

export type RecipeEdge = {
   __typename?: 'RecipeEdge';
  node: Recipe;
  cursor: Scalars['String'];
};

export enum RecipeOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  IngredientsAsc = 'ingredients_ASC',
  IngredientsDesc = 'ingredients_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC'
}

export type RecipePreviousValues = {
   __typename?: 'RecipePreviousValues';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
};

export type RecipeScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<RecipeScalarWhereInput>>;
  OR?: Maybe<Array<RecipeScalarWhereInput>>;
  NOT?: Maybe<Array<RecipeScalarWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Scalars['String']>>;
  content_not_in?: Maybe<Array<Scalars['String']>>;
  content_lt?: Maybe<Scalars['String']>;
  content_lte?: Maybe<Scalars['String']>;
  content_gt?: Maybe<Scalars['String']>;
  content_gte?: Maybe<Scalars['String']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
};

export type RecipeSubscriptionPayload = {
   __typename?: 'RecipeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Recipe>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<RecipePreviousValues>;
};

export type RecipeSubscriptionWhereInput = {
  AND?: Maybe<Array<RecipeSubscriptionWhereInput>>;
  OR?: Maybe<Array<RecipeSubscriptionWhereInput>>;
  NOT?: Maybe<Array<RecipeSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<RecipeWhereInput>;
};

export type RecipeUpdateInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  images?: Maybe<AssetUpdateOneWithoutImagesRecipeInput>;
  userLikes?: Maybe<UserLikeUpdateManyWithoutRecipeInput>;
};

export type RecipeUpdateManyDataInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
};

export type RecipeUpdateManyMutationInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
};

export type RecipeUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<RecipeCreateWithoutImagesInput>>;
  connect?: Maybe<Array<RecipeWhereUniqueInput>>;
  set?: Maybe<Array<RecipeWhereUniqueInput>>;
  disconnect?: Maybe<Array<RecipeWhereUniqueInput>>;
  delete?: Maybe<Array<RecipeWhereUniqueInput>>;
  update?: Maybe<Array<RecipeUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<RecipeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<RecipeScalarWhereInput>>;
  upsert?: Maybe<Array<RecipeUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type RecipeUpdateManyWithWhereNestedInput = {
  where: RecipeScalarWhereInput;
  data: RecipeUpdateManyDataInput;
};

export type RecipeUpdateOneWithoutUserLikesInput = {
  create?: Maybe<RecipeCreateWithoutUserLikesInput>;
  connect?: Maybe<RecipeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<RecipeUpdateWithoutUserLikesDataInput>;
  upsert?: Maybe<RecipeUpsertWithoutUserLikesInput>;
};

export type RecipeUpdateWithoutImagesDataInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLikeUpdateManyWithoutRecipeInput>;
};

export type RecipeUpdateWithoutUserLikesDataInput = {
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  images?: Maybe<AssetUpdateOneWithoutImagesRecipeInput>;
};

export type RecipeUpdateWithWhereUniqueWithoutImagesInput = {
  where: RecipeWhereUniqueInput;
  data: RecipeUpdateWithoutImagesDataInput;
};

export type RecipeUpsertWithoutUserLikesInput = {
  update: RecipeUpdateWithoutUserLikesDataInput;
  create: RecipeCreateWithoutUserLikesInput;
};

export type RecipeUpsertWithWhereUniqueWithoutImagesInput = {
  where: RecipeWhereUniqueInput;
  update: RecipeUpdateWithoutImagesDataInput;
  create: RecipeCreateWithoutImagesInput;
};

export type RecipeWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<RecipeWhereInput>>;
  OR?: Maybe<Array<RecipeWhereInput>>;
  NOT?: Maybe<Array<RecipeWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Scalars['String']>>;
  content_not_in?: Maybe<Array<Scalars['String']>>;
  content_lt?: Maybe<Scalars['String']>;
  content_lte?: Maybe<Scalars['String']>;
  content_gt?: Maybe<Scalars['String']>;
  content_gte?: Maybe<Scalars['String']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_lt?: Maybe<Scalars['String']>;
  owner_lte?: Maybe<Scalars['String']>;
  owner_gt?: Maybe<Scalars['String']>;
  owner_gte?: Maybe<Scalars['String']>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  images?: Maybe<AssetWhereInput>;
  userLikes_every?: Maybe<UserLikeWhereInput>;
  userLikes_some?: Maybe<UserLikeWhereInput>;
  userLikes_none?: Maybe<UserLikeWhereInput>;
};

export type RecipeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED'
}

export type UserLike = Node & {
   __typename?: 'UserLike';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  user?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
};

export type UserLikeConnection = {
   __typename?: 'UserLikeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserLikeEdge>>;
  aggregate: AggregateUserLike;
};

export type UserLikeCreateInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars['String']>;
  recipe?: Maybe<RecipeCreateOneWithoutUserLikesInput>;
};

export type UserLikeCreateManyWithoutRecipeInput = {
  create?: Maybe<Array<UserLikeCreateWithoutRecipeInput>>;
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>;
};

export type UserLikeCreateWithoutRecipeInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars['String']>;
};

export type UserLikeEdge = {
   __typename?: 'UserLikeEdge';
  node: UserLike;
  cursor: Scalars['String'];
};

export enum UserLikeOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type UserLikePreviousValues = {
   __typename?: 'UserLikePreviousValues';
  status: Status;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  user?: Maybe<Scalars['String']>;
};

export type UserLikeScalarWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserLikeScalarWhereInput>>;
  OR?: Maybe<Array<UserLikeScalarWhereInput>>;
  NOT?: Maybe<Array<UserLikeScalarWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_lt?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
};

export type UserLikeSubscriptionPayload = {
   __typename?: 'UserLikeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<UserLike>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserLikePreviousValues>;
};

export type UserLikeSubscriptionWhereInput = {
  AND?: Maybe<Array<UserLikeSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserLikeSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserLikeSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserLikeWhereInput>;
};

export type UserLikeUpdateInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars['String']>;
  recipe?: Maybe<RecipeUpdateOneWithoutUserLikesInput>;
};

export type UserLikeUpdateManyDataInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars['String']>;
};

export type UserLikeUpdateManyMutationInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars['String']>;
};

export type UserLikeUpdateManyWithoutRecipeInput = {
  create?: Maybe<Array<UserLikeCreateWithoutRecipeInput>>;
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>;
  set?: Maybe<Array<UserLikeWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserLikeWhereUniqueInput>>;
  delete?: Maybe<Array<UserLikeWhereUniqueInput>>;
  update?: Maybe<Array<UserLikeUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: Maybe<Array<UserLikeUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UserLikeScalarWhereInput>>;
  upsert?: Maybe<Array<UserLikeUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type UserLikeUpdateManyWithWhereNestedInput = {
  where: UserLikeScalarWhereInput;
  data: UserLikeUpdateManyDataInput;
};

export type UserLikeUpdateWithoutRecipeDataInput = {
  status?: Maybe<Status>;
  user?: Maybe<Scalars['String']>;
};

export type UserLikeUpdateWithWhereUniqueWithoutRecipeInput = {
  where: UserLikeWhereUniqueInput;
  data: UserLikeUpdateWithoutRecipeDataInput;
};

export type UserLikeUpsertWithWhereUniqueWithoutRecipeInput = {
  where: UserLikeWhereUniqueInput;
  update: UserLikeUpdateWithoutRecipeDataInput;
  create: UserLikeCreateWithoutRecipeInput;
};

export type UserLikeWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserLikeWhereInput>>;
  OR?: Maybe<Array<UserLikeWhereInput>>;
  NOT?: Maybe<Array<UserLikeWhereInput>>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Array<Status>>;
  status_not_in?: Maybe<Array<Status>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_lt?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  recipe?: Maybe<RecipeWhereInput>;
};

export type UserLikeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateRecipeGraphQlMutationVariables = {
  data: RecipeCreateInput;
};


export type CreateRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createRecipe: (
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes?: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  ) }
);

export type CreateUserLikeGraphQlMutationVariables = {
  data: UserLikeCreateInput;
};


export type CreateUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createUserLike: (
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe?: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id'>
    )> }
  ) }
);

export type DeleteAssetGraphQlMutationVariables = {
  where: AssetWhereUniqueInput;
};


export type DeleteAssetGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteAsset?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id'>
  )> }
);

export type DeleteRecipeGraphQlMutationVariables = {
  where: RecipeWhereUniqueInput;
};


export type DeleteRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteRecipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id'>
  )> }
);

export type DeleteUserLikeGraphQlMutationVariables = {
  where: UserLikeWhereUniqueInput;
};


export type DeleteUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserLike?: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
  )> }
);

export type UpdateRecipeGraphQlMutationVariables = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type UpdateRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { updateRecipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes?: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type RecipeGraphQlQueryVariables = {
  where: RecipeWhereUniqueInput;
};


export type RecipeGraphQlQuery = (
  { __typename?: 'Query' }
  & { recipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes?: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type RecipesGraphQlQueryVariables = {
  where?: Maybe<RecipeWhereInput>;
};


export type RecipesGraphQlQuery = (
  { __typename?: 'Query' }
  & { recipes: Array<Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes?: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )>> }
);

export type UserLikeGraphQlQueryVariables = {
  where: UserLikeWhereUniqueInput;
};


export type UserLikeGraphQlQuery = (
  { __typename?: 'Query' }
  & { userLike?: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe?: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
      & { userLikes?: Maybe<Array<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )> }
);

export type UserLikesGraphQlQueryVariables = {
  where?: Maybe<UserLikeWhereInput>;
};


export type UserLikesGraphQlQuery = (
  { __typename?: 'Query' }
  & { userLikes: Array<Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe?: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
      & { userLikes?: Maybe<Array<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )>> }
);
